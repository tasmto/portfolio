import '../styles/styles.css';
import type { AppProps } from 'next/app';
import SiteWrapper from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteWrapper>
      <Component {...pageProps} />
    </SiteWrapper>
  );
}

export default MyApp;
