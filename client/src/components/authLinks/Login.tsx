
import { useLocation, useNavigate } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import { useUserStore } from "../../store/userStore";
import usePostStore from "../../store/postStore";

type Props = {
  className?: string;
};

export default function Login({ className }: Props) {
  const {isLoggedIn} = useUserStore()

  const {submitPost} = usePostStore()

  console.log()

  const navigate = useNavigate()

  const handlePublish = async () => {
    try {
      await submitPost();
      navigate("/"); // Navigate to home or another page upon successful submission
    } catch (error) {
      console.error("Error submitting post:", error);
      
    }
  }


  const location = useLocation();


  if(location.pathname === "/write" && isLoggedIn){
    return (
      <div className="flex items-center gap-4">
          <button className="font-semibold bg-emerald-600 px-4 py-2 rounded-xl hover:scale-105 transition" onClick={handlePublish}>
           Publish
         </button>
         <LogoutButton className={className!}/>
      </div>
    )
  }
  else if(location.pathname != "/write" && isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
          <button className="font-semibold bg-indigo-600 px-4 py-2 rounded-xl hover:scale-105 transition" onClick={() => navigate('/write')}>
           Write
         </button>
         <LogoutButton className={className!}/>
      </div>
    )
  }
  else {
    return (
      <div className="flex items-center gap-4">
          <button className={className} onClick={() => navigate('/login')}>Login</button>
      </div>
    )
  }
}
