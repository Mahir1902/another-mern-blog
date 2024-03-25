
import Menu from "../components/Menu";
import Comments from "../components/Comments";
import UserInfo from "../components/UserInfo";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { slugify } from "../store/postStore";

export default function SinglePost() {

  const {slug} = useParams()

  const properSlug = slugify(slug!)

  console.log(slug)

  // Query to fetch a single post based on the title
  const {data: postData, isLoading: isPostLoading} = useQuery({
    queryKey: ['singlePost', slug],
    queryFn: async () => {
      const {data} = await axios.get(`http://localhost:3001/api/post/getPostByTitle?slug=${properSlug}`)
      return data
    }
  })


  //  Query to fetch comments for a single post base on title

  console.log(postData)

  // console.log(data)

  if(isPostLoading) return <h1>Loading...</h1>


  return (
    <div className="mt-5">
      {/* Post info */}
      <div className="flex justify-center gap-14">
        <div className="flex-1 flex flex-col justify-between gap-5">
          <h1 className="text-[2.25rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[4rem] font-bold">
            {/* 5 Daily Habits for a Healthier Life */}
            {postData.title}
          </h1>

          <UserInfo user={postData.user} date={postData.createdAt}/>
        </div>

        {postData.img && (
        <div className="reletive flex-1 h-[22rem]  hidden lg:block">
          <img
            src={postData.img}
            alt="image"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
        )}
      </div>

      {/* Post content */}
      <div className="flex gap-14">
        <div className="mt-[3rem] flex-5">
          <div className="text-lg md:text-xl font-light " dangerouslySetInnerHTML={{__html: postData?.desc}}/>
            
          <div>
            <Comments title={postData.slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
