
import Featured from '../components/Featured'
import CategoryList from '../components/CategoryList'

import Menu from '../components/Menu'
import PostList from '../components/PostList'

export default function Home() {
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className='flex gap-12'>
        <PostList/>
        <Menu/>
      </div>
      
    </div>
  )
}
