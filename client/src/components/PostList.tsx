
import { useState } from 'react'
import Pagination from './Pagination'
import Post from './Post'
import { PostType } from '../pages/Home'


type PostListProps = {
  postData: PostType[]
}

export default function PostList({postData}: PostListProps) {

  
  const [currPage, setCurrPage] = useState(1)
  const [postsPerPage] = useState(4)


  const lastPostIndex = currPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = postData.slice(firstPostIndex, lastPostIndex)

  

  console.log(postData)

  return (
    <div className='flex-5'>
      <div>
        <h1 className='text-3xl font-bold my-12'>Recent Posts</h1>

        {/* posts */}
        {currentPosts.map((post) => (
        <div>
          {/* individual post */}
          <Post id={post.id} title={post.title} desc={post.desc} category={post.catSlug} img={post.img} createdAt={post.createdAt}/>
        </div>

        ))}

      </div>
      <Pagination totalPosts={postData.length} postsPerPage={postsPerPage} setCurrPage={setCurrPage} currPage= {currPage}/>
    </div>
  )
}
