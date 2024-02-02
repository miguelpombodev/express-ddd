import GetUserFactory from "../../factories/GetUser.factory";

export default interface IGetUserService {
	execute(id: string): Promise<GetUserFactory>;
}
