import { Router } from "express"
import { createPost, getPostByTitle, getPosts, getPostsByCategory } from "../controllers/post"


const postRoutes = Router()

postRoutes.get('/getPosts', getPosts)
postRoutes.get('/getPostsByCategory', getPostsByCategory)
postRoutes.get('/getPostByTitle', getPostByTitle)
postRoutes.post('/createPost', createPost)

export default postRoutes