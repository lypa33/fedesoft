const rest = require('express')


const app = rest()

app.get('/', (req, res) => {

    if (typeof req.query.key === 'undefined')
    {
        res.status(511)
        res.json({ "response": 'Network Authentication Required'})
        return
    }

    console.log(req.query.key)
    res.status(200)
    res.send('OK')

})

app.listen(3002, () => {
    console.log('Server running')
})