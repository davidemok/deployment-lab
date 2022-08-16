const path = require('path')
const { mainModule } = require('process')

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'))
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/styles.css"))
    },

    getJava: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/main.js'))
    }
}