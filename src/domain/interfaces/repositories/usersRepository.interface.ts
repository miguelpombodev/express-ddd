import { Users } from "@domain/entities/Users";

export interface IUsersRepository {
	findByIdAsync(id: string): Promise<Users | null>;
}
