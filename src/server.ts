import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import registerRouters from "./routes";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

registerRouters(server);

server.listen(process.env.PORT ?? 3000);

server.listen(() => {
  const PORT = process.env.PORT ?? 3000;

  console.log(`App running!\nhttp://localhost:${PORT}/`);
});
