export default interface IPasswordEncryptionService {
	hashPassword(password: string, salt: number): Promise<string>;
}
