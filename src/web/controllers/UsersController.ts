import { Request, Response } from "express";
import GetUserFactory from "@domain/factories/users/GetUser.factory";
import { container } from "tsyringe";
import GetUserService from "@implementations/users/GetUserService";
import CreateUserService from "@implementations/users/CreateUserService";
import APIError from "@domain/errors/APIError";
import UpdateUserService from "@implementations/users/UpdateUserService";
import UpdateUserDTO from "@domain/dtos/UpdateUser.dto";

export default class UsersControllers {
	public async getUser(
		request: Request,
		response: Response,
	): Promise<Response<GetUserFactory>> {
		const _getUserServiceImplementation = container.resolve(GetUserService);
		const user = await _getUserServiceImplementation.searchByEmail(
			request.authenticatedUserEmail,
		);

		if (user === null) {
			throw new APIError("User does not exists", 409);
		}

		return response.status(200).send(user);
	}

	public async createUser(
		request: Request,
		response: Response,
	): Promise<Response<string>> {
		const { name, phone, email, password, cpf } = request.body;

		const _createUserServiceImplementation =
			container.resolve(CreateUserService);
		const _getUserServiceImplementation = container.resolve(GetUserService);

		const checkUser = await _getUserServiceImplementation.searchByCPF(cpf);

		if (checkUser) {
			throw new APIError("User already exists", 409);
		}

		const userEmail = await _createUserServiceImplementation.createOneUserAsync(
			{
				name,
				email,
				password,
				phone,
				cpf,
			},
		);

		return response.status(200).send({ message: userEmail });
	}

	public async updateUser(
		request: Request,
		response: Response,
	): Promise<Response<boolean>> {
		const userId = request.params.id;
		const userToBeUpdated = new UpdateUserDTO({ id: userId, ...request.body });

		const _updateUserServiceImplementation =
			container.resolve(UpdateUserService);
		const _getUserServiceImplementation = container.resolve(GetUserService);

		const getUser = await _getUserServiceImplementation.searchById(
			userToBeUpdated.id,
		);

		if (getUser === null) {
			throw new APIError("User does not exists", 409);
		}

		const updatedUser =
			await _updateUserServiceImplementation.updateOneUserAsync(
				userToBeUpdated,
			);

		return response.status(200).send({ message: updatedUser });
	}
}
