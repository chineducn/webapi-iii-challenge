// code away!
const server = require('./server')
const port = process.env.PORT || 7500

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})