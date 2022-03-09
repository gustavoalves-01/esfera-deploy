import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'
import { ButtonElement } from '../components/Button/styled'
import Footer from '../components/Footer'
import InputComponent from '../components/InputComponent'
import SearchComponent from '../components/SearchComponent'
import TagCategory from '../components/TagCategory'

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
    </>
  )
}

export default Home
