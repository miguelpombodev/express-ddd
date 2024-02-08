import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import routes from "./web/routes";
import "./services/injections";
import loggerMiddleware from "@middlewares/HttpRouteLogger.middleware";
import APIErrorMiddleware from "@middlewares/APIError.middleware";

export const app = express();

app.use(express.json());

app.use(loggerMiddleware);

routes.forEach((route) => {
	app.use(route.prefixName, route.route);
});
app.use(APIErrorMiddleware);
