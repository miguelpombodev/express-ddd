import "reflect-metadata";
import GetUserService from "@implementations/users/GetUserService";
import UserRepositoryMock from "../mocks/user.mock";

describe("Get user", () => {
	it("should return basic informations of an user", async () => {
		const mockRepo = new UserRepositoryMock();
		const _service = new GetUserService(mockRepo);

		const result = await _service.execute("000000");

		expect(result).toHaveProperty("cpf");
	});

	it("should return null when user is not registered in database", async () => {
		const mockRepo = new UserRepositoryMock();
		const _service = new GetUserService(mockRepo);

		expect(async () => {
			await _service.execute("000001");
		}).rejects.toThrow(Error);
	});
});
