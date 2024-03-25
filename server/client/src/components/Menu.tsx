import {PopularPosts } from "../constants";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import axios from "axios";


type PopularPosts = {
  id:string,
  title:string,
  username: string,
  createdAt:string,
  catSlug:string,
  img:string,
  cat: {
    color:string
  }
}

export default function Menu() {

  const [popularPosts, setPopularPosts] = useState<PopularPosts[]>([])


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://another-mern-blog.onrender.com/api/post/getPopularPosts')
        if(res.status === 200) {
          setPopularPosts(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts()
    
  }, [])


  return (
    <div className='flex-2 mt-[3rem] hidden lg:block'>
      
        <h2 className="font-normal text-red-400">What's hot 🔥</h2>
        <h1 className="text-2xl font-semibold">Most Popular</h1>
        <div className="flex flex-col gap-9 mt-9 mb-14">
          {popularPosts.map(post => (
            <PostItem key={post.title} title={post.title} author={post.username} image={post.img} date={post.createdAt.substring(0,10)} category={post.catSlug} bgColor={post.cat.color}/>
          ))}
        </div>

        {/* <h2 className="font-normal text-red-400">Chosen by the editor ✒</h2>
        <h1 className="text-2xl font-semibold">Editors pick</h1>
        <div className="flex flex-col gap-9 mt-9">
          {EditorsPick.map(post => (
            <PostItem key={post.title} image={post.image} title={post.title} author={post.author} date={post.date} category={post.category} bgColor={post.bgColor}/>
          ))}
        </div> */}
    </div>
  )
}
