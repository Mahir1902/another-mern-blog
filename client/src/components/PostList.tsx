
import { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Post from './Post'
import axios from 'axios'


type Post = {
  id: string
  title: string,
  desc: string,
  catSlug: string

}

export default function PostList() {

  const [postData, setPostData] = useState<Post[]>([])
  const [currPage, setCurrPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)


  const lastPostIndex = currPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = postData.slice(firstPostIndex, lastPostIndex)

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

  console.log(postData)

  return (
    <div className='flex-5'>
      <div>
        <h1 className='text-3xl font-bold my-12'>Recent Posts</h1>

        {/* posts */}
        {currentPosts.map((post) => (
        <div>
          {/* individual post */}
          <Post id={post.id} title={post.title} desc={post.desc} category={post.catSlug}/>
        </div>

        ))}

      </div>
      <Pagination totalPosts={postData.length} postsPerPage={postsPerPage} setCurrPage={setCurrPage} currPage= {currPage}/>
    </div>
  )
}
