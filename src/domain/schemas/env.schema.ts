import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
	APP_PORT: z.number().default(3333),
	DATABASE_TYPE: z.string().default("postgres"),
	DATABASE_HOST: z.string().default("localhost"),
	DATABASE_PORT: z.number().default(5432),
	DATABASE_USERNAME: z.string(),
	DATABASE_PASSWORD: z.string(),
	DATABASE_NAME: z.string().default("Foodie_DB"),
	API_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
	console.error(_env.error.format());
	throw new Error("Invalid Environment variables");
}

export const env = _env.data;
