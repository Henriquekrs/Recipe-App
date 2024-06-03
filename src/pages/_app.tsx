import FooterBar from '@/components/Footer';
import HeaderBar from '@/components/Header';
import { GlobalProvider } from '@/context/GlobalProvider';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideHeaderAndFooter = router.pathname === '/login';

  return (
    <GlobalProvider>
      {!hideHeaderAndFooter && <HeaderBar />}
      <Component {...pageProps} />
      {!hideHeaderAndFooter && <FooterBar />}
    </GlobalProvider>
  );
}

export default MyApp;
