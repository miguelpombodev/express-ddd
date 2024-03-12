import { inject, injectable } from "tsyringe";
import PasswordEncryptionService from "../../PasswordHashingService";
import ILoginAccountService from "@domain/interfaces/services/ILoginAccount.interface";
import { sign } from "jsonwebtoken";
import APIError from "@domain/errors/APIError";
import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";
import LoginAccountDTO from "@domain/dtos/LoginAccount.dto";
import JWTAuthFactory from "@domain/factories/auth/JWTAuth.factory";
import { env } from "@domain/schemas/env.schema";

@injectable()
export default class LoginAccountService implements ILoginAccountService {
	constructor(
		@inject("UsersRepository")
		private _repository: IUsersRepository,
	) {}

	public async loginAccountAsync({
		email,
		bodySentPassword,
	}: LoginAccountDTO): Promise<JWTAuthFactory> {
		const getRegisteredUser = await this._repository.findByEmailAsync(email);

		if (getRegisteredUser === null) {
			throw new APIError(
				"There is an issue in field email/password, please be sure of passed informations",
				404,
			);
		}

		const password = await PasswordEncryptionService.comparePasswordHash(
			getRegisteredUser?.Password,
			bodySentPassword,
		);

		if (!password) {
			throw new APIError(
				"There is an issue in field email/password, please be sure of passed informations",
				404,
			);
		}

		const token = sign({ email }, env.API_SECRET, {
			expiresIn: "1d",
			algorithm: "HS256",
		});

		return new JWTAuthFactory(token);
	}
}
