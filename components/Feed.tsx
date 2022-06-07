import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../graphql/queries'
import Post from './Post';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

type Props = {
  topic?:string
}


function Feed({topic}: Props) {

  console.log(`this is the ${topic}`)


  const {data, error} = !topic
  ? useQuery(GET_ALL_POSTS) 
  : useQuery(GET_ALL_POSTS_BY_TOPIC,{
    variables: {
      topic:topic,
    }
  })

  console.log(data)
  console.log(error)

  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic


  return (
    <div className="mt-5 space-y-4">
      {posts?.map(post =>
      <Post key ={post.id} post ={post}/>
      )}
      </div>
  )
}

export default Feed