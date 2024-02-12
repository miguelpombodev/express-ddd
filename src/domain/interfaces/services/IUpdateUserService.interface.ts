import IUpdateUserDTO from "../dtos/UpdateUserDTO";

export default interface IUpdateUserService {
	updateOneUserAsync(
		newUserInformationsValues: IUpdateUserDTO,
	): Promise<boolean>;
}
