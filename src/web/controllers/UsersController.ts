import { Request, Response } from "express";
import GetUserFactory from "@domain/factories/users/GetUser.factory";
import { container } from "tsyringe";
import GetUserService from "@implementations/users/GetUserService";
import winstonLogger from "@logger/index";

export default class UsersControllers {
	async getUser(
		request: Request,
		response: Response,
	): Promise<Response<GetUserFactory>> {
		try {
			const { id } = request.params;
			winstonLogger.info(
				`HTTP Request: [${request.method}] ${request.path}, params: ${id}`,
			);
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
}
