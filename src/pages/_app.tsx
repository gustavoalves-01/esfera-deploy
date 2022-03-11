import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BuscarProvider } from '../providers/buscarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <BuscarProvider>
      <Component {...pageProps} />
    </BuscarProvider>
  </>
}

export default MyApp
