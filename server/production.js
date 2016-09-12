var express = require('express')
var appRoot = process.cwd()
var path = require('path')
var compression = require('compression')
var PORT = process.env.PORT || 8080

var app = express()

app.use(compression())
app.use(express.static(path.join(appRoot, 'static')))

app.get('*', function (req, res) {
    res.sendFile(path.join(appRoot, 'static', 'index.html'))
})

app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
})
