import FooterBar from '@/components/Footer';
import HeaderBar from '@/components/Header';
import { GlobalProvider } from '@/context/GlobalProvider';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is the login page or a details page with an ID parameter
  const hideHeaderAndFooter = router.pathname === '/login' || (router.pathname.includes('/meals') && router.query.id) || (router.pathname.includes('/drinks') && router.query.id);

  return (
    <GlobalProvider>
      {!hideHeaderAndFooter && <HeaderBar />}
      <Component {...pageProps} />
      {!hideHeaderAndFooter && <FooterBar />}
    </GlobalProvider>
  );
}

export default MyApp;
