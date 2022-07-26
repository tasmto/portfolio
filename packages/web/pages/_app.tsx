import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SiteWrapper from '../components/wrapper/SiteWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteWrapper>
      <Component {...pageProps} />
    </SiteWrapper>
  );
}

export default MyApp;
