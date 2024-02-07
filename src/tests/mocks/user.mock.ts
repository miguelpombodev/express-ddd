import { Users } from "@domain/entities/Users";
import { IUsersRepository } from "@domain/interfaces/repositories/UsersRepository.interface";

export default class UserRepositoryMock implements IUsersRepository {
	users = [
		new Users(
			"000000",
			"test user",
			"999999999999",
			"user_test@test.com",
			"12345678900",
			new Date(),
			new Date(),
		),
	];
	async findByIdAsync(id: string): Promise<Users | null> {
		const user = this.users.find((user) => user.Id === id);

		if (user === undefined) {
			return null;
		}
		return user;
	}
}
