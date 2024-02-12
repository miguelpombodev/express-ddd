import IUpdateUserDTO from "../dtos/IUpdateUserDTO";

export default interface IUpdateUserService {
	updateOneUserAsync(
		newUserInformationsValues: IUpdateUserDTO,
	): Promise<boolean>;
}
