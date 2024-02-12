import { Router } from "express";
import UsersControllers from "@controllers/UsersController";
import { validateRequest } from "zod-express-middleware";
import createAndUpdateUserDTO from "@domain/schemas/CreateAndUpdateUser.validation";

export const userRouter = Router();
const userControllers = new UsersControllers();

userRouter.get("/get/:id", userControllers.getUser);
userRouter.post(
	"/create",
	validateRequest({
		body: createAndUpdateUserDTO,
	}),
	userControllers.createUser,
);
userRouter.put(
	"/update/:id",
	validateRequest({
		body: createAndUpdateUserDTO,
	}),
	userControllers.updateUser,
);
