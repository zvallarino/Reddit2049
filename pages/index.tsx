import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2049</title>
      </Head>
      <Header />
      <h1>Hello</h1>


    </div>
  )
}

export default Home
