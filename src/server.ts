import 'reflect-metadata'
import 'dotenv/config'
import express, {Router, Request, Response} from 'express'
import { userRouter } from './web/routes/users.route'

const app = express()
const router = Router()

app.use(express.json())

router.get('/', (req: Request, res: Response) => {
  return res.json({
    'message': "It's working!"
  })
})

app.use(router)
app.use(userRouter)

app.listen(3333,() => {
  console.log(`Server is running in port ${process.env.APP_PORT}`)
})