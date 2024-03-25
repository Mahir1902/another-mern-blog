import { PropsWithChildren, useEffect } from 'react'
import { useUserStore } from '../store/userStore'
import { useNavigate } from 'react-router-dom'

type Props = PropsWithChildren

export default function ProtectedRoute({children}: Props) {
  
    const {isLoggedIn} = useUserStore()
    const navigate = useNavigate()

    useEffect(()=> {

        if(!isLoggedIn) navigate('/login', {replace: true})

    },[navigate, isLoggedIn])

    return children
}