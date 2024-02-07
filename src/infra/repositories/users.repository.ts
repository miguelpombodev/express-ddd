import { Repository } from "typeorm";
import { Users } from "@domain/entities/Users";
import { dbConnectInitiator } from "@database/connections";
import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";

export default class UsersRepository implements IUsersRepository {
	private repository: Repository<Users>;

	constructor() {
		this.repository =
			dbConnectInitiator.relationalDatabaseConnectionORMOptions.getRepository(
				Users,
			);
	}

	async findByIdAsync(id: string): Promise<Users | null> {
		return await this.repository.findOne({
			where: {
				Id: id,
			},
		});
	}

	async createUserAsync(
		id: string,
		name: string,
		email: string,
		phone: string,
		password: string,
		cpf: string,
	): Promise<Users> {
		const user = this.repository.create({
			Id: id,
			Name: name,
			Email: email,
			Password: password,
			Phone: phone,
			CPF: cpf,
		});

		this.repository.save(user);
		return user;
	}
}
