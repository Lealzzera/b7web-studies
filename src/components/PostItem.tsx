import React from 'react'
import { Post } from '../types/Post'

type Props = {
  data: Post
}

const PostItem = ({ data }: Props) => {
  return (
    <div key={data.id} className='my-8 bg-blue-300'>
      <p>User: {data.userId}</p>
      <h1 className='text-white bg-blue-500'>{data.title}</h1>
      <span>{data.body}</span>
    </div>
  )
}

export default PostItem