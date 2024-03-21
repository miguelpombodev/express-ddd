import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import { generalRoutes, loggedRoutes } from "./web/routes";
import swaggerUI from "swagger-ui-express";

import "./services/injections";
import loggerMiddleware from "@middlewares/HttpRouteLogger.middleware";
import APIErrorMiddleware from "@middlewares/APIError.middleware";
import SwaggerJSON from "./swagger.json";
import authJWTToken from "@middlewares/AuthJWTToken.middleware";

export const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(SwaggerJSON));

app.use(loggerMiddleware);

generalRoutes.forEach((route) => {
	app.use(`/v1/${route.prefixName}`, route.route);
});

app.use(authJWTToken);

loggedRoutes.forEach((route) => {
	app.use(`/v1/${route.prefixName}`, route.route);
});

app.use(APIErrorMiddleware);
