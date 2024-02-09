import ICreateUserDTO from "../dtos/CreateUserDTO";

export default interface ICreatetUserService {
	execute({
		name,
		email,
		phone,
		password,
		cpf,
	}: ICreateUserDTO): Promise<string>;
}
