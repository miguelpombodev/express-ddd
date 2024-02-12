export default interface IPasswordEncryptionService {
	hashPassword(password: string, salt: number): Promise<string>;
	comparePasswordHash(
		oldPassword: string,
		newPassword: string,
	): Promise<boolean>;
}
