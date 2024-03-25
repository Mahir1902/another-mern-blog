import { Link } from "react-router-dom"
import UserInfo from "./UserInfo"
import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from "react"
import { useUserStore } from "../store/userStore"


type Props = {
    title:string
}

type CommentData = {
    desc: string;
    postSlug: string;
    username: string | null;
  }

export default function Comments({title}: Props) {

    
    const {isLoggedIn, username} = useUserStore()

    console.log(isLoggedIn, username) 

    const [comment, setComment] = useState('')

    const queryClient = useQueryClient()

    const addCommentMutation = useMutation<void, unknown, CommentData>( newComment => axios.post(`http://localhost:3000/api/comment/addComment`, newComment, {withCredentials: true}),
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['comments', title])
        }
    }
    
    )

    const handleSubmit = async () => {

        if(!comment.trim()) return

        try {
            
           addCommentMutation.mutateAsync({desc: comment, postSlug: title, username})
           setComment('')

        } catch (error) {
            console.log(error)    
        }

        
    }


    const {data: commentsData, isLoading: isCommentLoading} = useQuery({
        queryKey: ['comments', title],
        queryFn: async () => {
          const {data} = await axios.get(`http://localhost:3001/api/comment/getComments?title=${title}`)
          return data
        }
    })

    if(isCommentLoading) return <h1>Loading...</h1>


  return (
    <div className="mt-[3rem]">
        <h1 className="text-4xl font-semibold mb-7">Comments</h1>
        {isLoggedIn ? (
                <div className="flex items-center justify-between gap-5 ">
                    <textarea name="" id="" placeholder="Write a comment..." className="p-5 w-full rounded-lg bg-white/10 backdrop-blur-md  focus:outline-none" value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <button className="bg-zinc-600 py-4 px-5 rounded-lg font-medium active:scale-90  transition-all hover:scale-105" onClick={handleSubmit}>Send</button>
                </div>
        ):
        (
            <Link to={'/login'}>
                Login to write a comment
            </Link>
        )}

        <div className="my-5 flex flex-col gap-14 max-h-[70rem] overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-thumb-black/30 scrollbar-thumb-rounded-full hover:scrollbar-thumb-black/50  ">
            {commentsData.map((comment: any) => (
                
            <div className="">
                <UserInfo user={comment.user} date={comment.createdAt}/>
                <p className="mt-5">{comment.desc}</p>
            </div>
            ))}
            
            
        </div>
    </div>
  )
}
