import "reflect-metadata";
import "dotenv/config";
import express from "express";
import routes from "./web/routes";

import "./services/injections";
import loggerMiddleware from "@middlewares/LoggerMiddleware";

export const app = express();

app.use(express.json());

app.use(loggerMiddleware);

routes.forEach((route) => {
	app.use(route.prefixName, route.route);
});
