import "reflect-metadata";

import { createServer } from "http";
import { parse } from "url";
import { createConnection } from "typeorm";
import path from "path";
import next from "next";

import { Link } from "../entities/Link";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    await createConnection({
      type: "sqlite",
      database: "local.db",
      synchronize: true,
      logging: true,
      entities: [Link, Post, User],
    });
  })
  .then(() => {
    createServer((req, res) => {
      handle(req, res, parse(req.url, true));
    }).listen(3000, () => {
      console.log("> Ready on http://localhost:3000");
    });
  });
