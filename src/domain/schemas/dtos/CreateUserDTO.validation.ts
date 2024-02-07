export default class CreateUserDTO {
	constructor(name: string, phone: string, email: string, cpf: string) {
		this.Name = name;
		this.Phone = phone;
		this.Email = email;
		this.CPF = cpf;
	}

	private Name: string;
	private Phone: string;
	private Email: string;
	private CPF: string;
}
