import { createConnection } from "typeorm";

import "reflect-metadata";

import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { Link } from "./entities";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const connection = createConnection({
  type: "sqlite",
  database: "local.db",
  entities: [Link],
  synchronize: true,
  logging: false,
});

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
});
