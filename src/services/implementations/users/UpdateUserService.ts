import IUpdateUserDTO from "@domain/interfaces/dtos/UpdateUserDTO";
import UsersRepository from "@infra/repositories/Users.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class UpdateUserService {
	constructor(
		@inject("UsersRepository")
		private userRepository: UsersRepository,
	) {}

	public async updateOneUserAsync(
		newUserInformationsValues: IUpdateUserDTO,
	): Promise<boolean> {
		const updateAffectedRowsCount =
			await this.userRepository.updateOneUserAsync(newUserInformationsValues);

		if (!updateAffectedRowsCount) {
			return false;
		}

		return true;
	}
}
