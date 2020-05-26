import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

console.log("→ Starting Teasy Generator Backend 🦕");

const connection = serve({ port: 8000 });

console.log("→ Teasy Backend Running 🔥");
console.log("→ Go Make a Request in http://localhost:8000/ 🌎");


for await (const request of connection) {
    console.log(request.url);
    request.respond({ body: "Hello World\n" });
}
