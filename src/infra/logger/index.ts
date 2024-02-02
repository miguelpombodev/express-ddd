import { createLogger, format, transports } from "winston";

const winstonLogger = createLogger({
	transports: [new transports.Console()],
	format: format.combine(
		format.combine(),
		format.timestamp(),
		format.colorize(),
		format.printf(({ timestamp, level, message }) => {
			return `[${timestamp}] ${level}: ${message}`;
		}),
	),
});

export default winstonLogger;
