import { Request, Response, NextFunction } from "express";
import winstonLogger from "@logger/index";

export default function loggerMiddleware(
	request: Request,
	_: Response,
	next: NextFunction,
): void {
	winstonLogger.info(
		`HTTP Request: [${request.method}] ${request.path}, params: ${request.params}`,
	);

	next();
}
