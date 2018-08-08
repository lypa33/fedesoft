const rest      = require('express')
const base64    = require('js-base64').Base64
const logger    = require('./libs/logger')
const make_string   = require('sprintf-js').sprintf

const app = rest()

app.get('/', (req, res) => {
    res.status(301)
    res.sendFile('views/hello_world.html', { root: __dirname})
})

app.get('/users/:nickname', (req, res) => {

    if (typeof req.query.key === 'undefined')
    {
        res.status(511)
        res.sendFile('views/access_denied.html', { root: __dirname})
        logger('API Key is undefined (not provided)')
        return
    }

    logger(make_string("API Key: %s", req.query.key))
    
    logger(make_string("User: %s", req.params.nickname))

    const str = base64.encode(req.query.key)

    res.status(200)
    res.send('OK '+str)

})

app.listen(3002, () => {
    logger('Server running')
    logger(make_string('Platform: %s', process.platform))
    logger(make_string('Arch: %s', process.arch))
    logger(make_string('App path: %s', process.cwd()))
    logger(make_string('PID: %s', process.pid))
})