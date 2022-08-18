const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '0847950fb90641a1a46b78f00a546599',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("we are under assault")

const { getHTML, getCSS, getJava } = require("./controller/controller.js")

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJava)


const port = process.env.PORT || 4000

app.listen(port, console.log("Server running on 4000"))