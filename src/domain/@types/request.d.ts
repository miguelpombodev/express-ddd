declare namespace Express {
	export interface Request {
		token: string | JwtPayload;
		authenticatedUserEmail: string;
	}
}
