const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

const { getHTML, getCSS, getJava } = require("./controller/controller.js")

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJava)


const port = process.env.PORT || 4000

app.listen(port, console.log("Server running on 4000"))