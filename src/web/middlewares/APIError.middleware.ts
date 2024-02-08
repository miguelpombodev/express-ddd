import APIError from "@domain/errors/APIError";
import winstonLogger from "@logger/index";
import { Request, Response, NextFunction } from "express";

export default function APIErrorMiddleware(
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction,
) {
	winstonLogger.error(`
		Error in :${error.stack}
	`);

	if (error instanceof APIError) {
		return response.status(error.statusCode).json({
			message: error.message,
		});
	}

	return response.status(500).json({
		message: `Internal Server Error - ${error.message}`,
	});
}
