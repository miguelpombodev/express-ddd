// import IPasswordEncryptionService from "@domain/interfaces/services/IPasswordEncryptionService.interface";
import { hash } from "bcrypt";

export default class PasswordEncryptionService {
	static async hashPassword(password: string, salt = 10): Promise<string> {
		const hashedPassword = await hash(password, salt);

		return hashedPassword;
	}
}
