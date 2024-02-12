import ICreateUserDTO from "./CreateUserDTO";

export default interface IUpdateUserDTO extends ICreateUserDTO {
	id: string;
}
