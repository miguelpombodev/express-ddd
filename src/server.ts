import { app } from "./app";
import { env } from "./domain/schemas/env.schema";

app.listen(3333, () => {
	console.log(`
[EXPRESS-DDD PROJECT]
Server is running! 🚀
[INFOS] : {
		NODE_ENV: ${env.NODE_ENV},
		PORT: ${env.APP_PORT},
	  }

------------------------------------------------------------------------
------------------------------------------------------------------------

`);
});
