import "reflect-metadata";
import "dotenv/config";
import express, { Router, Request, Response } from "express";
import { userRouter } from "./web/routes/Users.route";

import { env } from "./domain/schemas/env.schema";

import "./services/injections";

const app = express();
const router = Router();

app.use(express.json());

router.get("/", (req: Request, res: Response) => {
	return res.json({
		message: "It's working!",
	});
});

app.use(router);
app.use(userRouter);

app.listen(3333, () => {
	console.log(`
[EXPRESS-DDD PROJECT]
Server is running! 🚀
[INFOS] : {
		NODE_ENV: ${env.NODE_ENV},
		PORT: ${env.APP_PORT},
	  }

------------------------------------------------------------------------
------------------------------------------------------------------------

`);
});
