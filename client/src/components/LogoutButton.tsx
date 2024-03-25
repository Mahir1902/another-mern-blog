import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

type Props = {
    className: string;
}

export default function LogoutButton({className}:Props) {

    const navigate = useNavigate()

    const {setIsLoggedIn} = useUserStore()

    const handleLogout = async () => {
        const res = await axios.post(`http://localhost:3000/api/auth/logout`, {}, {withCredentials: true})

        if(res.status === 200) {
            setIsLoggedIn(false)
            navigate('/login')
        }
            
    }


  return (
    <button className={className} onClick={handleLogout}>
        Logout
    </button>
  )
}
