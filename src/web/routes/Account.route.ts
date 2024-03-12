import { Router } from "express";
import UsersControllers from "@controllers/UsersController";
import { validateRequest } from "zod-express-middleware";
import createAndUpdateUserDTO from "@domain/schemas/CreateAndUpdateUser.validation";
import AccountControllers from "@controllers/AccountController";
import loginUserAccountDTO from "@domain/schemas/LoginUserAccount.validation";

export const accountRouter = Router();
const userControllers = new UsersControllers();
const accountController = new AccountControllers();

accountRouter.get("/get/:id", userControllers.getUser);

accountRouter.post(
	"/login",
	validateRequest({
		body: loginUserAccountDTO,
	}),
	accountController.login,
);

accountRouter.post(
	"/create",
	validateRequest({
		body: createAndUpdateUserDTO,
	}),
	userControllers.createUser,
);

accountRouter.put(
	"/update/:id",
	validateRequest({
		body: createAndUpdateUserDTO,
	}),
	userControllers.updateUser,
);
