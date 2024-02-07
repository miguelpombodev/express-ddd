import { DataSource } from "typeorm";
import { Users } from "@domain/entities/Users";
import { env } from "@domain/schemas/env.schema";

class DatabasesConnectionsInitiator {
	constructor() {
		this.relationalDatabaseConnectionORMOptions = new DataSource({
			type: env.DATABASE_TYPE,
			host: env.DATABASE_HOST,
			port: env.DATABASE_PORT,
			username: env.DATABASE_USERNAME,
			password: env.DATABASE_PASSWORD,
			database: env.DATABASE_NAME,
			entities: [Users],
			logging: ["query", "error", "info"],
		});

		this.initializeConnections();
	}

	relationalDatabaseConnectionORMOptions: DataSource;

	initializeConnections() {
		this.relationalDatabaseConnectionORMOptions
			.initialize()
			.then(() => {
				console.log("\nDATABASE CONNECTED SUCCESSFULLY \n");
			})
			.catch((error) => {
				console.log("Error Connecting to Database", error);
			});
	}
}

export const dbConnectInitiator = new DatabasesConnectionsInitiator();
