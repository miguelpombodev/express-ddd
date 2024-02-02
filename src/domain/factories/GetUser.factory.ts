export default class GetUserFactory {
	constructor(Name: string, Phone: string, Email: string, CPF: string) {
		this.name = Name;
		this.phone = Phone;
		this.email = Email;
		this.cpf = CPF;
	}

	private name: string;
	private phone: string;
	private email: string;
	private cpf: string;
}
