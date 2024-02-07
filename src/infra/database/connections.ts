import { DataSource } from "typeorm";
import { Users } from "@domain/entities/Users";
import { env } from "@domain/schemas/env.schema";
import winstonLogger from "../../services/logger/index";

class DatabasesConnectionsInitiator {
	constructor() {
		this.ORM_LOG_OPTIONS =
			env.NODE_ENV !== "production"
				? this.ORM_LOG_OPTIONS
				: [...this.ORM_LOG_OPTIONS, "log"];

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
	ORM_LOG_OPTIONS = ["query", "error", "info"];

	initializeConnections() {
		this.relationalDatabaseConnectionORMOptions
			.initialize()
			.then(() => {
				winstonLogger.info("DATABASE CONNECTED SUCCESSFULLY");
			})
			.catch((error) => {
				winstonLogger.error(`Error Connecting to Database - ${error}`);
			});
	}
}

export const dbConnectInitiator = new DatabasesConnectionsInitiator();
