import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'

import { TestComponent } from '../components/TestComponent'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Esfera Energia Blog</title>
      </Head>
      <TestComponent>
        <h1>Esfera Blog</h1>
        <Link href="/principais-insumos-empresa">Principais Insumos da Empresa</Link>
      </TestComponent>

      <Button textButton='Receber conteúdos' widthButton='207px' heightButton='52px'/>
      
    </>
  )
}

export default Home
