import { Router } from "express";
import { checkAuth, login, logout, register } from "../controllers/auth";



const authRoutes = Router()

authRoutes.post('/login', login )

authRoutes.post('/register', register)

authRoutes.post('/logout', logout)

authRoutes.get('/checkAuth', checkAuth)

export default authRoutes