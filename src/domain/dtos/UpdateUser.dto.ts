import { Users } from "@domain/entities/Users";
import IUpdateUserDTO from "@domain/interfaces/dtos/UpdateUserDTO";

export default class UpdateUserDTO implements IUpdateUserDTO {
	constructor(userToBeUpdated: Users) {
		this.id = userToBeUpdated.Id;
		this.name = userToBeUpdated.Name;
		this.email = userToBeUpdated.Email;
		this.phone = userToBeUpdated.Phone;
		this.password = userToBeUpdated.Password;
		this.cpf = userToBeUpdated.CPF;
	}

	id: string;
	name: string;
	email: string;
	phone: string;
	password: string;
	cpf: string;
}
