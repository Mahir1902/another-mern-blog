import express, {Express, Request, Response} from 'express'
import { PORT } from './secrets'
import rootRouter from './routes'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

import { errorMiddleware } from './middleware/errors'
import cookieParser from "cookie-parser";
import path from 'path'

const __dirname = path.resolve()

const app:Express = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use('/api',rootRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

// export const prismaClient = new PrismaClient({
//   log:['query']
// })

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log('Server is running on port 3000')
})