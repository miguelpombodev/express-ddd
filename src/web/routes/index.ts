import { healthcheckRouter } from "./Healthcheck.route";
import { accountRouter } from "./Account.route";
import { loggedAccountRouter } from "./LoggedAccount.route";

export const generalRoutes = [
	{
		prefixName: "account",
		route: accountRouter,
	},
	{
		prefixName: "healthcheck",
		route: healthcheckRouter,
	},
];

export const loggedRoutes = [
	{
		prefixName: "account",
		route: loggedAccountRouter,
	},
];
