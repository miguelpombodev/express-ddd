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
		try {
			const { id } = request.params;
			const _getUserServiceImplementation = container.resolve(GetUserService);
			const user = await _getUserServiceImplementation.execute(id);

			response.statusCode = 200;
			return response.send(user);
		} catch (error: any) {
			response.statusCode = 404;
			return response.send({
				message: error.message,
			});
		}
	}

	async createUser(request: Request, response: Response) {
		try {
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

			response.statusCode = 200;
			return response.send({ message: userEmail });
		} catch (error: any) {
			response.statusCode = 404;
			return response.send({
				message: error.message,
			});
		}
	}
}
