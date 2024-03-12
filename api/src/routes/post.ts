import { Router } from "express"
import { getPosts } from "../controllers/post"


const postRoutes = Router()

postRoutes.get('/getPosts', getPosts)

export default postRoutes