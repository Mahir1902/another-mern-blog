import { Link } from "react-router-dom";


type Post = {
  id:string
  title: string,
  desc: string,
  category: string,
  img:string,
  createdAt:string
}


export default function Post({id, title, desc, category, img, createdAt}:Post) {
  return (
    <div className="flex mb-12 items-center gap-12" key={id}>
      {/* image container */}
      {img && (
      <div className="flex-1 h-[22rem] lg:block relative hidden">
        <img src={img} alt="" className="object-fit rounded-lg"/>
      </div>
      )}
      {/* Title, desc, category, date */}
      <div className="flex-1 flex flex-col gap-6">
        <div className='flex gap-4'>
          <span className="text-gray-400">{createdAt.substring(0,10)}</span>
          <span className="font-medium text-red-400 uppercase">{category}</span>
        </div>
        <Link to={`/post/${title}`}>
          <h1 className="text-2xl font-bold">{title}</h1>
        </Link>
        <div className="font-light text-lg text-zinc-400" dangerouslySetInnerHTML={{__html: desc.substring(0, 200) + '...'}}></div>
        
        <Link to={`/post/${title}`} className="border-b w-max border-red-400">Read More</Link>
      </div>
    </div>
  );
}
