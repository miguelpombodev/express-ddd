export * from "jsonwebtoken";

declare module "jsonwebtoken" {
	export interface JwtPayload {
		email: string;
	}
}
