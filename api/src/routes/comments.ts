import { Router } from "express"
import { addComment, getComments } from "../controllers/comments"


const commentRoute = Router()

commentRoute.get('/getComments', getComments)

commentRoute.post('/addComment', addComment)


export default commentRoute