import { Link } from "react-router-dom";
import { EditorsPick, PopularPosts } from "../constants";
import PostItem from "./PostItem";


export default function Menu() {
  return (
    <div className='flex-2 mt-[3rem] hidden lg:block'>
      
        <h2 className="font-normal text-red-400">What's hot 🔥</h2>
        <h1 className="text-2xl font-semibold">Most Popular</h1>
        <div className="flex flex-col gap-9 mt-9 mb-14">
          {PopularPosts.map(post => (
            <PostItem key={post.title} title={post.title} author={post.author} date={post.date} category={post.category} bgColor={post.bgColor}/>
          ))}
        </div>

        <h2 className="font-normal text-red-400">Chosen by the editor ✒</h2>
        <h1 className="text-2xl font-semibold">Editors pick</h1>
        <div className="flex flex-col gap-9 mt-9">
          {EditorsPick.map(post => (
            <PostItem key={post.title} image={post.image} title={post.title} author={post.author} date={post.date} category={post.category} bgColor={post.bgColor}/>
          ))}
        </div>
    </div>
  )
}
