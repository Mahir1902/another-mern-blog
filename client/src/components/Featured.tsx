import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


type FeaturedPost = {
  title:string,
  desc:string,
  img:string,

}

export default function Featured() {

  const [featutredPost, setFeaturedPost] = useState<FeaturedPost | null>(null)

  useEffect(() => {
    const fetchFeaturedPost = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/post/getPopularPosts')

        if(res.status === 200) {
          setFeaturedPost(res.data[0])
        }

      } catch (error) {
        console.log(error)
      }
    }

    fetchFeaturedPost()

  }, [])


  return (
    <div className='mt-8'>
      {/* Maybe can give featutred post title instead? */}
      {/* <h1 className='lg:text-[4.5rem] xl:text-[6rem]'><b>Hey there!</b> Discover my sotries and creative ideas</h1> */}
      <h1 className=' font-bold text-3xl'>Featured Post</h1>

      {/* posts */}
      <div className=' mt-[2.5rem] flex items-center gap-[3.125rem]'>
        <div className=' max-lg:hidden flex-1 h-[31.25rem] object-cover relative'>
          <img src={featutredPost?.img} alt="post image"  className='h-full w-full object-cover rounded-lg' />
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold'>{featutredPost?.title}</h1>
          {/* <p className='text-[1rem] md:text-[1.25rem] text-softTextColor'>
            {featutredPost?.desc.substring(0, 200)}...
          </p> */}
          <div dangerouslySetInnerHTML={{__html: featutredPost?.desc.substring(0,200) + '...'}} className="text-[1rem] md:text-[1.25rem] text-softTextColor"/>
          <button className='px-3 py-2 md:px-5 md:py-3 dark:bg-white w-[8rem] rounded-md dark:text-black font-semibold bg-softBg'>
            <Link to={`/post/${featutredPost?.title}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

