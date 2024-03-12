import { Router } from "express";
import authRoutes from "./auth";
import profileRoute from "./profile";
import categoryRoutes from "./category";


const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/profile', profileRoute )
rootRouter.use('/category', categoryRoutes)

export default rootRouter