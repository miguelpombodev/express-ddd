import IUpdateUserDTO from "@domain/interfaces/dtos/IUpdateUserDTO";
import CreateUserDTO from "./CreateUser.dto";

export default class UpdateUserDTO
	extends CreateUserDTO
	implements IUpdateUserDTO
{
	constructor(request_body: IUpdateUserDTO) {
		super({
			name: request_body.name,
			email: request_body.email,
			phone: request_body.phone,
			password: request_body.password,
			cpf: request_body.cpf,
		});
		this.id = request_body.id;
	}

	id: string;
}
