import { Router } from "express";
import UsersControllers from "@controllers/UsersController";
import { validateRequest } from "zod-express-middleware";
import createUserDTO from "@domain/schemas/dtos/CreateUserDTO.validation";

export const userRouter = Router();
const userControllers = new UsersControllers();

userRouter.get("/get/:id", userControllers.getUser);
userRouter.post(
	"/create",
	validateRequest({
		body: createUserDTO,
	}),
	userControllers.createUser,
);
