
import { Link } from 'react-router-dom'

type Props = {
    image?:string
    category:string
    title:string
    author:string
    date:string
    bgColor:string
}

export default function PostItem({author,category,date,title,image, bgColor}: Props) {
  return (
    <Link to={`/`} className="flex items-center gap-5">
            {image && (
              <div className="flex-1 relative aspect-square ">
              <img src={image} alt="" className=" h-full w-full rounded-full" />
            </div>
            )}
            
            <div className="flex-4 flex flex-col gap-1">
              <span style={{backgroundColor: bgColor }} className="text-sm px-2 py-1 rounded-lg text-center w-max  text-white font-medium">{category}</span>
              <h3 className="text-base font-medium text-gray-400">
                {title}
              </h3>
              <div className="text-sm flex gap-2">
                <span>{author}</span>
                <span className="text-gray-400 font-medium">{date}</span>
              </div>
            </div>
          </Link>
  )
}