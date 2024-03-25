import { useQuery } from "react-query";
import Menu from "../components/Menu";
import PostList from "../components/PostList";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";



export default function CategoryPage() {

  const {categoryName} = useParams()

  const {data, isLoading, error} = useQuery({
    queryKey: ['postsByCategory', categoryName],
    queryFn: async () => {
      const {data} = await axios.get(`https://another-mern-blog.onrender.com/api/post/getPostsByCategory?categoryName=${categoryName}`)
      return data
    }
  })

  console.log(data)

  if(error) {
    if(error instanceof AxiosError) {
      return <h1>{error.response?.data.message}</h1>
    }

    return <h1>Someting went wrong</h1>
  }

  console.log(error)

  return (
    <div>
      <div className=" pb-1">
        <h1 className="capitalize dark:bg-slate-900 bg-white py-2 px-4 text-4xl border-b-2   font-bold ">
          {categoryName} Blogs 
        </h1>
      </div>
      <div className="flex gap-12">
        {isLoading ? <div className="w-full flex justify-center items-center text-5xl"><h1>Loading...</h1></div> : <PostList postData={data} />}
        <Menu />
      </div>
    </div>
  );
}
