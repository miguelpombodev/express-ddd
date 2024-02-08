export default class DatabaseError extends Error {
	public readonly message: string;
	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype);

		this.message = message;

		Error.captureStackTrace(this);
	}
}
