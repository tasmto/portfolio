import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

type Props = {
  children: React.ReactNode
}

const GoogleCaptchaWrapper = ({ children }: Props) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production')
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY || ''}
        useRecaptchaNet={true}
        scriptProps={{
          async: true, // optional, default to false,
          defer: true, // optional, default to false
          appendTo: 'head', // optional, default to "head", can be "head" or "body",
          nonce: undefined, // optional, default undefined
        }}
      >
        {children}
      </GoogleReCaptchaProvider>
    )
  else return <>{children}</>
}

export default GoogleCaptchaWrapper
