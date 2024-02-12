import ICreateUserDTO from "../dtos/ICreateUserDTO";

export default interface ICreatetUserService {
	createOneUserAsync({
		name,
		email,
		phone,
		password,
		cpf,
	}: ICreateUserDTO): Promise<string>;
}
