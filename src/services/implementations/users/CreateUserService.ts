import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";
import ICreateUserService from "@domain/interfaces/services/ICreateUser.interface";
import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import PasswordEncryptionService from "../../PasswordHashingService";
import ICreateUserDTO from "@domain/interfaces/dtos/ICreateUserDTO";

@injectable()
export default class CreateUserService implements ICreateUserService {
	constructor(
		@inject("UsersRepository")
		private _repository: IUsersRepository,
	) {}
	public async createOneUserAsync({
		name,
		email,
		phone,
		password,
		cpf,
	}: ICreateUserDTO): Promise<string> {
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
