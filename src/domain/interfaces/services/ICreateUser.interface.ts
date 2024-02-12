import ICreateUserDTO from "../dtos/ICreateUserDTO";

export default interface ICreatetUserService {
	execute({
		name,
		email,
		phone,
		password,
		cpf,
	}: ICreateUserDTO): Promise<string>;
}
