import { inject, injectable } from "tsyringe";

import GetUserFactory from "@domain/factories/users/GetUser.factory";
import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";
import IGetUserService from "@domain/interfaces/services/IGetUser.interface";
import APIError from "@domain/errors/APIError";

@injectable()
export default class GetUserService implements IGetUserService {
	constructor(
		@inject("UsersRepository")
		private _repository: IUsersRepository,
	) {}
	public async searchById(id: string): Promise<GetUserFactory | null> {
		const result = await this._repository.findByIdAsync(id);

		if (result === null) {
			throw new APIError("User does not exists", 404);
		}

		const user = new GetUserFactory(
			result?.Name,
			result?.Phone,
			result?.Email,
			result?.CPF,
		);

		return user;
	}

	public async searchByCPF(cpf: string): Promise<GetUserFactory | null> {
		const result = await this._repository.findByCPFAsync(cpf);

		if (result === null) {
			return null;
		}

		const user = new GetUserFactory(
			result?.Name,
			result?.Phone,
			result?.Email,
			result?.CPF,
		);

		return user;
	}
}
