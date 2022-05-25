import { Express } from "express";
import pageRouter from "./page.route";
import searchRouter from "./search.route";
import notFoundRouter from "./notFound.route";

const registerRouters = (server: Express): void => {
  // init_server
  server.use(pageRouter);
  server.use(searchRouter);
  server.use(notFoundRouter);
};

export default registerRouters;
