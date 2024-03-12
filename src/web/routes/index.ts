import { healthcheckRouter } from "./Healthcheck.route";
import { accountRouter } from "./Account.route";

export default [
	{
		prefixName: "account",
		route: accountRouter,
	},
	{
		prefixName: "healthcheck",
		route: healthcheckRouter,
	},
];
