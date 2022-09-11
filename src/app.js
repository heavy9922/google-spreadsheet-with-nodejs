const express = require("express")
const app = express()
app.use(express.json())
app.set('views', './src/views')
app.set('view engine', 'pug')

//routes
app.use(require("./routes/google.routes"))

module.exports = app
