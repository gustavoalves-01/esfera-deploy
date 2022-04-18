import type { AppProps } from 'next/app';
import { BuscarProvider } from '../providers/buscarContext';
import { GlobalStyle } from '../styles/globals';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <span style={{zIndex: 10000000000000000000}}><NextNProgress color="#f5426c" /></span>
      <BuscarProvider>
        <Component {...pageProps} />
      </BuscarProvider>
    </>
  );
}

export default MyApp;
