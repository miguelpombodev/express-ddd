import { Router } from "express";
import UsersControllers from "@controllers/UsersController";

export const userRouter = Router();
const userControllers = new UsersControllers();

userRouter.get("/user/:id", userControllers.getUser);
