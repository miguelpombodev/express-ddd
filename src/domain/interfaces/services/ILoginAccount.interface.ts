import JWTAuthFactory from "@domain/factories/auth/JWTAuth.factory";
import ILoginAccountDTO from "../dtos/ILoginAccountDTO";

export default interface ILoginAccountService {
	loginAccountAsync({
		email,
		bodySentPassword,
	}: ILoginAccountDTO): Promise<JWTAuthFactory>;
}
