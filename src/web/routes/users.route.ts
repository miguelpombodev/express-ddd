import { Router } from "express";
import UsersControllers from "@controllers/UsersController";
import { validateRequest } from "zod-express-middleware";
import { z } from "zod";

export const userRouter = Router();
const userControllers = new UsersControllers();

userRouter.get("/get/:id", userControllers.getUser);
userRouter.post(
	"/create",
	validateRequest({
		body: z.object({
			name: z.string(),
			phone: z.string(),
			email: z.string(),
			password: z.string(),
			cpf: z.string(),
		}),
	}),
	userControllers.createUser,
);
