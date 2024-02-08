import BaseError from "./BaseError";

export default class APIError extends BaseError {
	constructor(message = "Bad Request", statusCode = 400) {
		super(message, statusCode);
	}
}
