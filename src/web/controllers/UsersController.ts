import { Request, Response } from "express";
import GetUserFactory from "@domain/factories/users/GetUser.factory";
import { container } from "tsyringe";
import GetUserService from "@implementations/users/GetUserService";
import CreateUserService from "@implementations/users/CreateUserService";

export default class UsersControllers {
	async getUser(
		request: Request,
		response: Response,
	): Promise<Response<GetUserFactory>> {
		const { id } = request.params;
		const _getUserServiceImplementation = container.resolve(GetUserService);
		const user = await _getUserServiceImplementation.execute(id);

		return response.status(200).send(user);
	}

	async createUser(request: Request, response: Response) {
		const { name, phone, email, password, cpf } = request.body;

		const _createUserServiceImplementation =
			container.resolve(CreateUserService);
		const userEmail = await _createUserServiceImplementation.execute(
			name,
			email,
			password,
			phone,
			cpf,
		);

		return response.status(200).send({ message: userEmail });
	}
}
