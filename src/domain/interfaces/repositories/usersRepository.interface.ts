import { Users } from "@domain/entities/Users";
import IUpdateUserDTO from "../dtos/UpdateUserDTO";

export interface IUsersRepository {
	findByIdAsync(id: string): Promise<Users | null>;
	findByCPFAsync(cpf: string): Promise<Users | null>;
	createUserAsync(
		id: string,
		name: string,
		email: string,
		phone: string,
		password: string,
		cpf: string,
	): Promise<Users>;
	updateOneUserAsync(
		userToBeUpdate: IUpdateUserDTO,
	): Promise<number | undefined>;
}
