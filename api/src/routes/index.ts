import { Router } from "express";
import authRoutes from "./auth";
import profileRoute from "./profile";
import categoryRoutes from "./category";
import postRoutes from "./post";


const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/profile', profileRoute )
rootRouter.use('/category', categoryRoutes)
rootRouter.use('/post', postRoutes)

export default rootRouter