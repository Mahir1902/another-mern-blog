import { Router } from "express";
import { getCategory } from "../controllers/category";



const categoryRoutes = Router()

categoryRoutes.get('/getCategory', getCategory)


export default categoryRoutes