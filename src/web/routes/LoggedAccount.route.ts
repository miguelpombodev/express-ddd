import { Router } from "express";
import UsersControllers from "@controllers/UsersController";
import { validateRequest } from "zod-express-middleware";
import createAndUpdateUserDTO from "@domain/schemas/CreateAndUpdateUser.validation";

export const loggedAccountRouter = Router();
const userControllers = new UsersControllers();

loggedAccountRouter.get("/get", userControllers.getUser);
loggedAccountRouter.put(
	"/update/:id",
	validateRequest({
		body: createAndUpdateUserDTO,
	}),
	userControllers.updateUser,
);
