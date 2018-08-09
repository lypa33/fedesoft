const httpError = require('http-errors')
const rest      = require("express");
const base64    = require("js-base64").Base64;
const logger    = require("./libs/logger");
const make_string   = require("sprintf-js").sprintf;

const app = rest();

/**
 * Restringuimos cada 'query' a 'case-sensitive'
 * util para obligar a los clientes a realizar
 * peticiones con URL's correctas y especificas
 *
 * Ejemplo:
 *          GET => /users/  Good
 *          GET => /USERS/  Wrong
 */

app.enable("case sensitive routing");

app.get("/", (req, res) => {
  res.status(301);
  //res.sendFile("views/hello_world.html", { root: __dirname });
  res.json({"error":"Hello world!"})
});

app.get("/users/:nickname", (req, res) => {
  if (typeof req.query.key === "undefined") {
    res.status(511);
    //res.sendFile("views/access_denied.html", { root: __dirname });
    res.json({"error":"Access denied"})
    logger("API Key is undefined (not provided)");
    return;
  }

  logger(make_string("API Key: %s", req.query.key));

  logger(make_string("User: %s", req.params.nickname));

  const str = base64.encode(req.query.key);

  res.status(200);
  res.send("OK " + str);
});

/**
 *  HTTP Logger
 */
app.use((req, res, next) =>{
    logger(
        make_string('Protocol: %s - Method: %s - URL: %s - SSL?: %s', 
                req.protocol, 
                req.method, 
                req.url, 
                (req.secure ? 'YES': 'NO')
        )
    )
    next()
})
/**
 * JSON
 */
app.use(rest.json());
/**
 * Encode URL's
 */
app.use(rest.urlencoded({ extended: true }))
/*
  Validar errores
*/
app.use((req, res, next) => {
  next(httpError(404));
})

/**
 * Gestionar errores
 */
app.use((err, req, res, next) => {
  switch (parseInt(err.status)) {
    case 404:
      res.status(404);
      //res.sendFile('views/404.html', { root: __dirname });
      res.json({"error":"Not found"})
      break;
    default:
      res.status(err.status || 500)
      //res.sendFile('views/internal_error.html', { root: __dirname });
      res.json({"error":"An error occured", "message": err.stack})
      break;
  }
})

app.listen(3002, () => {
  logger("Server running");
  logger(make_string("Platform: %s", process.platform));
  logger(make_string("Arch: %s", process.arch));
  logger(make_string("App path: %s", process.cwd()));
  logger(make_string("PID: %s", process.pid));
})
