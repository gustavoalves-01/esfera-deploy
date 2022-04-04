import type { AppProps } from 'next/app';
import { BuscarProvider } from '../providers/buscarContext';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <BuscarProvider>
        <Component {...pageProps} />
      </BuscarProvider>
    </>
  );
}

export default MyApp;
