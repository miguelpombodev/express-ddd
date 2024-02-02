import GetUserFactory from "../../factories/users/GetUser.factory";

export default interface IGetUserService {
	execute(id: string): Promise<GetUserFactory>;
}
