export default interface ICreatetUserService {
	execute(
		name: string,
		email: string,
		phone: string,
		password: string,
		cpf: string,
	): Promise<string>;
}
