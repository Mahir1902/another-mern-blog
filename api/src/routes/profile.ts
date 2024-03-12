import {Router} from 'express'
import { getProfile } from '../controllers/profile'

const profileRoute = Router()


profileRoute.get('/getProfile', getProfile)

export default profileRoute