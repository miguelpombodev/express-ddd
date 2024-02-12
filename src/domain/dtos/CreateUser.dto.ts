import ICreateUserDTO from "@domain/interfaces/dtos/ICreateUserDTO";

export default class CreateUserDTO implements ICreateUserDTO {
	constructor(request_body: ICreateUserDTO) {
		this.name = request_body.name;
		this.email = request_body.email;
		this.phone = request_body.phone;
		this.password = request_body.password;
		this.cpf = request_body.cpf;
	}

	name: string;
	email: string;
	phone: string;
	password: string;
	cpf: string;
}
