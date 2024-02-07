import { z } from "zod";

const createUserSchema = z.object({
	name: z.string(),
	phone: z.string(),
	email: z.string(),
	cpf: z.string(),
});

const schema = createUserSchema.safeParse({});

if (schema.success === false) {
	console.error(schema.error.format());
	throw new Error("Invalid User Values");
}

export const createUserValidation = schema.data;

export default createUserValidation;
