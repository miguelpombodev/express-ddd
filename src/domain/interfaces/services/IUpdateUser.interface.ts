import { Users } from "@domain/entities/Users";
import IUpdateUserDTO from "../dtos/IUpdateUserDTO";

export default interface IUpdateUserService {
	updateOneUserAsync(
		newUserInformationsValues: IUpdateUserDTO,
	): Promise<boolean>;
}
