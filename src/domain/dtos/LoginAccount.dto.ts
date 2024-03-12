import ILoginAccountDTO from "@domain/interfaces/dtos/ILoginAccountDTO";

export default class LoginAccountDTO implements ILoginAccountDTO {
	constructor(request_body: ILoginAccountDTO) {
		this.email = request_body.email;
		this.bodySentPassword = request_body.bodySentPassword;
	}

	email: string;
	bodySentPassword: string;
}
