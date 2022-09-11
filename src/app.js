const express = require("express")
const app = express()
require("./spreadsheet")

//routes

app.use(require("./routes/google.routes"))

module.exports = app
