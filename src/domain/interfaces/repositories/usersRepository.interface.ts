import { Users } from "../../entities/Users";


export interface IUsersRepository {
  findByIdAsync(id: string): Promise<Users | null>
}