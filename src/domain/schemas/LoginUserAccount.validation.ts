import { z } from "zod";

const loginUserAccountDTO = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export default loginUserAccountDTO;
