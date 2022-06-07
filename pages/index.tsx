import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import PostBox from '../components/PostBox'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import { useQuery } from '@apollo/client'
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'
import SubredditRow from '../components/SubredditRow'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const Home: NextPage = () => {
  const {data} = useQuery(GET_SUBREDDITS_WITH_LIMIT,{
    variables: {
      limit:10,
    }
  })

  const subreddits: Subreddit[] = data?.getSubredditListLimit

  return (
    <div className="my-7 mx-auto max-w-5xl ">
      <Head>
        <title>Reddit 2049</title>
      </Head>

      <PostBox />
      

      <div className = 'flex '> 
        <Feed />

        <div className = "sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline"> 
          <p className = "text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div> 
            {subreddits?.map((subreddit, index)=>(
              <SubredditRow key={subreddit.id} topic = {subreddit.topic} index = {index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
