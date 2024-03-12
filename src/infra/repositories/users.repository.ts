import { Repository } from "typeorm";
import { Users } from "@domain/entities/Users";
import { dbConnectInitiator } from "@database/connections";
import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";
import DatabaseError from "@domain/errors/DatabaseError";
import IUpdateUserDTO from "@domain/interfaces/dtos/IUpdateUserDTO";

export default class UsersRepository implements IUsersRepository {
	private repository: Repository<Users>;

	constructor() {
		this.repository =
			dbConnectInitiator.relationalDatabaseConnectionORMOptions.getRepository(
				Users,
			);
	}

	public async findByIdAsync(id: string): Promise<Users | null> {
		return await this.repository.findOne({
			where: {
				Id: id,
			},
		});
	}

	public async findByCPFAsync(cpf: string): Promise<Users | null> {
		return await this.repository.findOne({
			where: {
				CPF: cpf,
			},
		});
	}

	public async findByEmailAsync(email: string): Promise<Users | null> {
		return await this.repository.findOne({
			where: {
				Email: email,
			},
		});
	}

	public async createUserAsync(
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

	public async updateOneUserAsync(
		usersInfos: IUpdateUserDTO,
	): Promise<number | undefined> {
		try {
			const updatedUser = await this.repository.update(usersInfos.id, {
				Id: usersInfos.id,
				Name: usersInfos.name,
				CPF: usersInfos.cpf,
				Password: usersInfos.password,
				Email: usersInfos.email,
				Phone: usersInfos.phone,
			});

			return updatedUser.affected;
		} catch (error) {
			throw new DatabaseError(error.message);
		}
	}
}
