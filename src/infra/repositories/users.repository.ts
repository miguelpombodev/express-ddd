import { Repository } from "typeorm";
import { Users } from "../../domain/entities/Users";
import { dbConnectInitiator } from "../database/connections";

export default class UsersRepository {
  private repository: Repository<Users>

  constructor () {
    this.repository = dbConnectInitiator.relationalDatabaseConnectionORMOptions.getRepository(Users)
  }

  async findById(id: string) {
    return await this.repository.findOne({
      where: {
        Id: id
      }
    })
  }
}