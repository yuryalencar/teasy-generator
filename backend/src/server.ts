import { Application } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { APP_PORT, APP_HOST, FRONTEND_HOST } from "./config.ts";
import router from "./routes.ts";

console.log("→ Starting Teasy Generator Backend 🦕");

const application = new Application();

console.log("→ Setting server and routes ⚙️ ");

application.use(oakCors({ origin: FRONTEND_HOST }))
application.use(router.routes());
application.use(router.allowedMethods());

console.log("→ Teasy Backend Running 🔥");
console.log(`→ Go Make a Request in http://${APP_HOST}:${APP_PORT}/ 🌎`);   

await application.listen(`${APP_HOST}:${APP_PORT}`);
