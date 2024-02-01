import { Repository } from "typeorm";
import { Users } from "../../domain/entities/Users";
import { dbConnectInitiator } from "../database/connections";
import { IUsersRepository } from "../../domain/interfaces/repositories/usersRepository.interface";

export default class UsersRepository implements IUsersRepository{
  private repository: Repository<Users>

  constructor () {
    this.repository = dbConnectInitiator.relationalDatabaseConnectionORMOptions.getRepository(Users)
  }

  async findByIdAsync(id: string): Promise<Users | null> {
    return await this.repository.findOne({
      where: {
        Id: id
      }
    })
  }
}