const users = require("express").Router();
const logger = require("../libs/logger");
const base64 = require("js-base64").Base64;
const make_string = require("sprintf-js").sprintf;

users.get("/", (req, res, next) => {
  logger("users route access denied.");
  res.status(301);
  res.json({ error: "Access denied." });
});

users.get("/:nickname", (req, res, next) => {
  if (typeof req.query.key === "undefined") {
    res.status(511);
    res.json({ error: "Access denied" });
    logger("API Key is undefined (not provided)");
    return;
  }

  logger(make_string("API Key: %s", req.query.key));

  logger(make_string("User: %s", req.params.nickname));

  const str = base64.encode(req.query.key);

  res.status(200);
  res.send("OK " + str);
});

module.exports = users;
