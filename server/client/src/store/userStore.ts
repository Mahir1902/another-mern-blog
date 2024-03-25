import axios from 'axios';
import {create} from 'zustand'


type UserStore = {
    username: string | null;
    isLoggedIn: boolean
    setUsername: (username: string) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    checkAuth: () => void;
}


export const useUserStore = create<UserStore>((set) => ({
    username: null,
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({isLoggedIn}),
    setUsername: (username) => set({username}),
    checkAuth: async () => {
        
        

      const res = await axios.get('https://another-mern-blog.onrender.com/api/auth/checkAuth', {withCredentials: true})

      // Set isLoggedIn based on the backend response
      set({ isLoggedIn: res.data.isValid });

    }
}))