import {create} from 'zustand'


type UserStore = {
    username: string | null;
    isLoggedIn: boolean
    setUsername: (username: string) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}


export const useUserStore = create<UserStore>((set) => ({
    username: null,
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({isLoggedIn}),
    setUsername: (username) => set({username}),
}))