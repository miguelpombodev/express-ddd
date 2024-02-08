import GetUserFactory from "@domain/factories/users/GetUser.factory";

export default interface IGetUserService {
	searchById(id: string): Promise<GetUserFactory | null>;
	searchByCPF(cpf: string): Promise<GetUserFactory | null>;
}
