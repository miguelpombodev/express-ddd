import ILoginAccountDTO from "../dtos/ILoginAccountDTO";

export default interface ILoginAccountService {
	loginAccountAsync({
		email,
		bodySentPassword,
	}: ILoginAccountDTO): Promise<string>;
}
