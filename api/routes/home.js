const home = require("express").Router();
const logger = require("../libs/logger");
const make_string = require("sprintf-js").sprintf;

home.get("/", (req, res, next) => {
  logger("home route access denied.");
  res.status(301);
  res.json({ error: "Access denied." });
});

module.exports = home;
