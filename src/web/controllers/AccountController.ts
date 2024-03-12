import { Request, Response } from "express";
import { container } from "tsyringe";
import LoginAccountService from "@implementations/account/LoginAccountService";

export default class AccountControllers {
	public async login(
		request: Request,
		response: Response,
	): Promise<Response<string>> {
		const { email, password } = request.body;
		const _accountLoginServiceImplementation =
			container.resolve(LoginAccountService);

		const token = await _accountLoginServiceImplementation.loginAccountAsync({
			email: email,
			bodySentPassword: password,
		});

		return response.status(200).send(token);
	}
}
