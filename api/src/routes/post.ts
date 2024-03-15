import { Router } from "express"
import { createPost, getPopularPosts, getPostByTitle, getPosts, getPostsByCategory } from "../controllers/post"


const postRoutes = Router()

postRoutes.get('/getPosts', getPosts)
postRoutes.get('/getPostsByCategory', getPostsByCategory)
postRoutes.get('/getPostByTitle', getPostByTitle)
postRoutes.post('/createPost', createPost)
postRoutes.get('/getPopularPosts', getPopularPosts)

export default postRoutes