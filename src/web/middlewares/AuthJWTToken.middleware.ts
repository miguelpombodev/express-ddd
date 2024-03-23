import APIError from "@domain/errors/APIError";
import { JwtPayload, verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { env } from "@domain/schemas/env.schema";

export interface IRequestAuthenticated extends Request {
	token: string | JwtPayload;
	authenticatedUserEmail: string;
}

interface IDecodedJwtPayload extends JwtPayload {
	email: string;
}

export default function authJWTToken(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const getAuthorizationHeader = request.headers.authorization;

		if (getAuthorizationHeader === undefined) {
			throw new APIError("JWT Token not provided", 401);
		}

		const [_, token] = getAuthorizationHeader.split(" ");

		const decodedToken = verify(token, env.API_SECRET) as IDecodedJwtPayload;

		(request as IRequestAuthenticated).token = decodedToken;
		(request as IRequestAuthenticated).authenticatedUserEmail =
			decodedToken.email;

		next();
	} catch (error) {
		throw new APIError(
			"Authentication went wrong, please be ensure of it",
			401,
		);
	}
}
