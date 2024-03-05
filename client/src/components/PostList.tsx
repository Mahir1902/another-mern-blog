
import Pagination from './Pagination'
import Post from './Post'

export default function PostList() {
  return (
    <div className='flex-5'>
      <div>
        <h1 className='text-3xl font-bold my-12'>Recent Posts</h1>

        {/* posts */}
        <div>
          {/* individual post */}
          <Post/>
        </div>
      </div>
      <Pagination/>
    </div>
  )
}
