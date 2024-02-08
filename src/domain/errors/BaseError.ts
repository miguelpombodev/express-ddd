export default class BaseError extends Error {
	public readonly message: string;
	public readonly statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype);

		this.message = message;
		this.statusCode = statusCode;

		Error.captureStackTrace(this);
	}
}
