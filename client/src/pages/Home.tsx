
import Featured from '../components/Featured'
import CategoryList from '../components/CategoryList'

import Menu from '../components/Menu'
import PostList from '../components/PostList'
import { useEffect, useState } from 'react'
import axios from 'axios'


export type PostType = {
  id: string
  title: string,
  desc: string,
  catSlug: string
  img:string,
  createdAt:string
}


export default function Home() {

  const [postData, setPostData] = useState<PostType[]>([])


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/post/getPosts')
        if(res.status === 200) {
          setPostData(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts()
      
  }, [])

  

  
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className='flex gap-12'>
        <PostList postData= {postData}/>
        <Menu/>
      </div>
      
    </div>
  )
}
