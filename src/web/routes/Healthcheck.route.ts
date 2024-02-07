import { Request, Response, Router } from "express";
export const healthcheckRouter = Router();

healthcheckRouter.get("/", (req: Request, res: Response) => {
	return res.json({
		message: "It's working!",
	});
});
