const register = require("express").Router();
const logger = require("../libs/logger");
const make_string = require("sprintf-js").sprintf;

register.get("/", (req, res, next) => {
  logger("register route access denied.");
  res.status(301);
  res.json({ error: "Access denied." });
});

module.exports = register;
