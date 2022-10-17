import React from 'react'
import { AnimatePresence } from 'framer-motion'
import LogRocket from 'logrocket'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '../styles/styles.css'

var MyApp = ({ Component, pageProps }: AppProps) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production')
    LogRocket.init('fjdwny/portfolio')
  const router = useRouter()

  return (
    <AnimatePresence
      mode='wait'
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}

export default MyApp
