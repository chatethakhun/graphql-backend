import express from "express";
import api from "./api";
import config from "./config";
import chalk from "chalk";

const app = express();
const port = config().port;

module.exports = api(app).listen(port, () => {
  console.log(`listening on ${port} ....`);
  console.log(
    `graphql is ${chalk.yellow(`http://localhost:${port}/graphql'`)}`
  );
});
