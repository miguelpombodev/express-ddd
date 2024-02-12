import IUpdateUserDTO from "@domain/interfaces/dtos/IUpdateUserDTO";
import IUpdateUserService from "@domain/interfaces/services/IUpdateUserService.interface";
import UsersRepository from "@infra/repositories/Users.repository";
import { inject, injectable } from "tsyringe";
import PasswordEncryptionService from "../../PasswordHashingService";

@injectable()
export default class UpdateUserService implements IUpdateUserService {
	constructor(
		@inject("UsersRepository")
		private userRepository: UsersRepository,
	) {}

	public async updateOneUserAsync(
		newUserInformationsValues: IUpdateUserDTO,
	): Promise<string> {
		const getUserOldValues = await this.userRepository.findByIdAsync(
			newUserInformationsValues.id,
		);

		if (
			!(await PasswordEncryptionService.comparePasswordHash(
				getUserOldValues?.Password,
				newUserInformationsValues.password,
			))
		) {
			const newUserHashedPassword =
				await PasswordEncryptionService.hashPassword(
					newUserInformationsValues.password,
				);

			newUserInformationsValues.password = newUserHashedPassword;
		} else {
			newUserInformationsValues.password = getUserOldValues?.Password;
		}

		const updateAffectedRowsCount =
			await this.userRepository.updateOneUserAsync(newUserInformationsValues);

		if (!updateAffectedRowsCount) {
			return "User informations has not been updated!";
		}

		return "User informations has been updated";
	}
}
