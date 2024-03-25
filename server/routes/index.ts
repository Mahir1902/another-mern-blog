import { Router } from "express";
import authRoutes from "./auth";
import profileRoute from "./profile";
import categoryRoutes from "./category";
import postRoutes from "./post";
import commentRoute from "./comments";


const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/profile', profileRoute )
rootRouter.use('/category', categoryRoutes)
rootRouter.use('/post', postRoutes)
rootRouter.use('/comment', commentRoute)

export default rootRouter