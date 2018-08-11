const httpError = require("http-errors");
const rest = require("express");
const make_string = require("sprintf-js").sprintf;
const auth = require("hawk");
const logger = require("./libs/logger");
const register = require("./routes/register");
const home = require("./routes/home");
const users = require("./routes/users");
const morgan = require("morgan");
const server = require("http");
const app = rest();

/**
 * Restringuimos cada 'query' a 'case-sensitive'
 * util para obligar a los clientes a realizar
 * peticiones con URL's correctas y especificas
 *
 * Ejemplo:
 *          GET => /users  Good
 *          GET => /USERS  Wrong
 */

app.enable('case sensitive routing');
app.disable('x-powered-by');
/**
 * Obligamos al cliente a realizar peticiones
 * con URL's absolutas
 *
 * Ejemplo:
 *          GET => /users Good
 *          GET => /users/ Wrong
 */

app.set("strict routing", true);

/**
 * JSON
 */
app.use(rest.json());
/**
 * Encode URL's
 */
app.use(rest.urlencoded({ extended: true }));


app.use(morgan("dev"));
app.use("/register", register);
app.use("/users", users);
app.use("/", home);

/*
Validar errores
*/
app.use((req, res, next) => {
  next(httpError(404));
});

/**
 * Gestionar errores
 */
app.use((err, req, res, next) => {
  switch (parseInt(err.status)) {
    case 404:
      res.status(404);
      //res.sendFile('views/404.html', { root: __dirname });
      res.json({ error: "Not found" });
      break;
    default:
      res.status(err.status || 500);
      //res.sendFile('views/internal_error.html', { root: __dirname });
      res.json({ error: "An error occured", message: err.stack });
      break;
  }
});

const APIServer = server.createServer(app);

APIServer.listen(3002);

APIServer.on("listening", () => {
  logger("Server start success.");
  logger(make_string("Platform: %s", process.platform));
  logger(make_string("Arch: %s", process.arch));
  logger(make_string("App path: %s", process.cwd()));
  logger(make_string("PID: %s", process.pid));
  logger("Listening client for now...")
});

APIServer.on("connection", (c) => {
  logger(make_string('Connection incomming from: %s:%s', c.remoteAddress, c.remotePort))
});

APIServer.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  //var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error("requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error("is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});
