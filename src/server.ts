import 'reflect-metadata'
import 'dotenv/config'
import express, {Router, Request, Response} from 'express'
import { Users } from './domain/entities/Users'
import { DatabasesConnectionsInitiator } from './infra/database/connections'

const app = express()
const router = Router()

app.use(express.json())

const dbConnectInitiator = new DatabasesConnectionsInitiator()

router.get('/', (req: Request, res: Response) => {
  return res.json({
    'message': "It's working!"
  })
})

router.get('/user', async (req: Request, res: Response) => {
  const user = await dbConnectInitiator.relationalDatabaseConnectionORMOptions.manager.getRepository(Users).findOne({
    where: {
      Id: 'f7617715-2e87-4b97-b686-9b982e6ef057'
    }
  })

  return res.json(user)
})

app.use(router)

app.listen(3333,() => {
  console.log(`Server is running in port ${process.env.APP_PORT}`)
})