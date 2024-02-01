import { Router, Request, Response } from 'express'
import UsersRepository from '../../infra/repositories/users.repository'

export const userRouter = Router()

userRouter.get('/user/:id', async (request: Request, response: Response) => {
  const userRepo = new UsersRepository()

  const { id } = request.params

  const user = await userRepo.findByIdAsync(id)

  return response.json(user)
})



