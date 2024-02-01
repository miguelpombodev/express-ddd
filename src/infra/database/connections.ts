import { DataSource } from "typeorm";
import { Users } from "../../domain/entities/Users";

class DatabasesConnectionsInitiator {
	constructor() {
		this.relationalDatabaseConnectionORMOptions = new DataSource({
			type: process.env.DATABASE_TYPE,
			host: process.env.DATABASE_HOST,
			port: process.env.DATABASE_PORT,
			username: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
			entities: [Users],
		});

		this.initializeConnections();
	}

	relationalDatabaseConnectionORMOptions: DataSource;

	initializeConnections() {
		this.relationalDatabaseConnectionORMOptions
			.initialize()
			.then(() => {
				console.log("Database connected successfully");
			})
			.catch((error) => {
				console.log("Error Connecting to Database", error);
			});
	}
}

export const dbConnectInitiator = new DatabasesConnectionsInitiator();
