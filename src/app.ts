import "reflect-metadata";
import "dotenv/config";
import express from "express";
import routes from "./web/routes";

import "./services/injections";

export const app = express();

app.use(express.json());

routes.forEach((route) => {
	app.use(route.prefixName, route.route);
});
