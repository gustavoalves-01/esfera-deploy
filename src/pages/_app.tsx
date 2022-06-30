import type { AppProps } from 'next/app';
import { BuscarProvider } from '../providers/buscarContext';
import { GlobalStyle } from '../styles/globals';
import NextNProgress from "nextjs-progressbar";
import { CategoriesProvider } from '../hooks/useCategories';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <span style={{ zIndex: 100000 }}><NextNProgress color="#f5426c" /></span>
      <CategoriesProvider>
        <BuscarProvider>
          <Component {...pageProps} />
        </BuscarProvider>
      </CategoriesProvider>
    </>
  );
}

export default MyApp;
