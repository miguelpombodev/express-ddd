import { QueryFailedError, Repository } from "typeorm";
import { Users } from "@domain/entities/Users";
import { dbConnectInitiator } from "@database/connections";
import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";
import APIError from "@domain/errors/APIError";
import DatabaseError from "@domain/errors/DatabaseError";

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

	async findByCPFAsync(cpf: string): Promise<Users | null> {
		return await this.repository.findOne({
			where: {
				CPF: cpf,
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
		try {
			const user = this.repository.create({
				Id: id,
				Name: name,
				Email: email,
				Password: password,
				Phone: phone,
				CPF: cpf,
			});

			await this.repository.save(user);
			return user;
		} catch (error) {
			throw new DatabaseError(error.message);
		}
	}
}
