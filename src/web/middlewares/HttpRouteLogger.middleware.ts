import { Request, Response, NextFunction } from "express";
import winstonLogger from "@logger/index";

export default function loggerMiddleware(
	request: Request,
	_: Response,
	next: NextFunction,
): void {
	const params = {
		bodyParams: "",
	};

	if (Object.values(request.body).length !== 0) {
		params.bodyParams = JSON.stringify(request.body);
	}

	winstonLogger.info(
		`HTTP Request: [${request.method}] ${request.path},
		${params.bodyParams.length === 0 ? "" : "Body Params: " + params.bodyParams}`,
	);

	next();
}
