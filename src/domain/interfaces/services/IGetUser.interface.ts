import GetUserFactory from "@domain/factories/users/GetUser.factory";

export default interface IGetUserService {
	execute(id: string): Promise<GetUserFactory>;
}
