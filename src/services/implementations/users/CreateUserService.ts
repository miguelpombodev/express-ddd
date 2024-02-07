import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";
import ICreateUserService from "@domain/interfaces/services/ICreateUser.interface";
import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import PasswordEncryptionService from "../../PasswordHashingService";

@injectable()
export default class CreateUserService implements ICreateUserService {
	constructor(
		@inject("UsersRepository")
		private _repository: IUsersRepository,
	) {}
	public async execute(
		name: string,
		email: string,
		phone: string,
		password: string,
		cpf: string,
	): Promise<string> {
		const id = randomUUID();
		const hashedPassword =
			await PasswordEncryptionService.hashPassword(password);

		const user = await this._repository.createUserAsync(
			id,
			name,
			email,
			phone,
			hashedPassword,
			cpf,
		);

		return user.Email;
	}
}
