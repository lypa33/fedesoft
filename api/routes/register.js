const register = require("express").Router();
const logger = require("../libs/logger");
const make_string = require("sprintf-js").sprintf;
const cipher = require('crypto')
const cipher2 = require('nodejs-aes256');

register.get("/", (req, res, next) => {

  if (typeof req.query.nick === 'undefined')
  {
    res.status(400)
    res.send('Bad request')
    return
  }
  if (typeof req.query.ip === 'undefined')
  {
    res.status(400)
    res.send('Bad request')
    return
  }
  if (typeof req.query.password === 'undefined')
  {
    res.status(400)
    res.send('Bad request')
    return
  }
  /*const userPayload = cipher.createDiffieHellman(2048)
  const userKey = userPayload.generateKeys()

  const serverPayload = cipher.createDiffieHellman(userPayload.getPrime(), userPayload.getGenerator())
  const serverKey = serverPayload.generateKeys()

  const uSecret = userPayload.computeSecret(serverKey)
  const sSecret = serverPayload.computeSecret(userKey)

  const ustr = uSecret.toString('hex')
  //const sstr = sSecret.toString('hex')

  const u = cipher2.encrypt(req.query.password, ustr)*/

  
  res.json({
    ip: req.query.ip,
    nick: req.query.nick,
    usecret: "sample"
  })
});

module.exports = register;
