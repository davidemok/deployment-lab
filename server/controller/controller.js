const path = require('path')

require('dotenv').config()
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

module.exports = {
    getHTML: (req, res) => {
        rollbar.log("HTML delivered bubberducky")
        res.sendFile(path.join(__dirname, '../../client/index.html'))
    },

    getCSS: (req, res) => {
        rollbar.log("CSS delivered bubberducky")
        res.sendFile(path.join(__dirname, "../../client/styles.css"))
    },

    getJava: (req, res) => {
        rollbar.log("Java delivered bubberducky")
        res.sendFile(path.join(__dirname, '../../client/main.js'))
    }
}