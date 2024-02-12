import { healthcheckRouter } from "./Healthcheck.route";
import { userRouter } from "./Users.route";

export default [
	{
		prefixName: "users",
		route: userRouter,
	},
	{
		prefixName: "healthcheck",
		route: healthcheckRouter,
	},
];
