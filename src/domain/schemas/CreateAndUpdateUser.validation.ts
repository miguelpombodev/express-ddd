import { z } from "zod";

const createAndUpdateUserDTO = z.object({
	name: z.string().trim(),
	phone: z.string().startsWith("0").min(12).max(12),
	email: z.string().email(),
	password: z.string().min(8),
	cpf: z.string().min(11).max(11),
});

export default createAndUpdateUserDTO;
