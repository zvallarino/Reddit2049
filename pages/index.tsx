import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2049</title>
      </Head>

      <PostBox />

      <div> 
        {/* Feed */}
      </div>
    </div>
  )
}

export default Home
