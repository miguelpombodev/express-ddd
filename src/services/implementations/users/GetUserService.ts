import { inject, injectable } from "tsyringe";

import GetUserFactory from "@domain/factories/users/GetUser.factory";
import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";
import IGetUserService from "@domain/interfaces/services/IGetUser.interface";

@injectable()
export default class GetUserService implements IGetUserService {
	constructor(
		@inject("UsersRepository")
		private _repository: IUsersRepository,
	) {}
	async execute(id: string): Promise<GetUserFactory> {
		const result = await this._repository.findByIdAsync(id);

		if (result === null) {
			throw new Error("User does not exists");
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
