// import IPasswordEncryptionService from "@domain/interfaces/services/IPasswordEncryptionService.interface";
import IPasswordEncryptionService from "@domain/interfaces/services/IPasswordEncryptionService.interface";
import { hash, compare } from "bcrypt";

export default class PasswordEncryptionService {
	static async hashPassword(password: string, salt = 10): Promise<string> {
		const hashedPassword = await hash(password, salt);

		return hashedPassword;
	}

	static async comparePasswordHash(
		oldPassword: string,
		newPassword: string,
	): Promise<boolean> {
		const passwordComparisionResult = await compare(newPassword, oldPassword);

		return passwordComparisionResult;
	}
}
