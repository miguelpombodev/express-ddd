import { Request, Response } from "express";
import GetUserFactory from "@domain/factories/users/GetUser.factory";
import { container } from "tsyringe";
import GetUserService from "@implementations/users/GetUserService";
import CreateUserService from "@implementations/users/CreateUserService";
import APIError from "@domain/errors/APIError";

export default class UsersControllers {
	async getUser(
		request: Request,
		response: Response,
	): Promise<Response<GetUserFactory>> {
		const { id } = request.params;
		const _getUserServiceImplementation = container.resolve(GetUserService);
		const user = await _getUserServiceImplementation.searchById(id);

		if (user === null) {
			throw new APIError("User already exists", 400);
		}

		return response.status(200).send(user);
	}

	async createUser(request: Request, response: Response) {
		const { name, phone, email, password, cpf } = request.body;

		const _createUserServiceImplementation =
			container.resolve(CreateUserService);
		const _getUserServiceImplementation = container.resolve(GetUserService);

		const checkUser = await _getUserServiceImplementation.searchByCPF(cpf);

		if (checkUser !== null) {
			throw new APIError("User already exists", 409);
		}

		const userEmail = await _createUserServiceImplementation.execute({
			name,
			email,
			password,
			phone,
			cpf,
		});

		return response.status(200).send({ message: userEmail });
	}
}
