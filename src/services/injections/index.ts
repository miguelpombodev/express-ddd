import { container } from "tsyringe";
import { IUsersRepository } from "../../domain/interfaces/repositories/UsersRepository.interface";
import UsersRepository from "../../infra/repositories/Users.repository";

container.registerSingleton<IUsersRepository>(
	"UsersRepository",
	UsersRepository,
);
