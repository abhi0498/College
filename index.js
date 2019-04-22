var express = require("express")
var ejs = require("ejs")
var app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("html/home")
})

app.get("/alumini", (req, res) => {
    res.render("html/alumini-fs")
})

app.listen(3000, () => {
    console.log("Server running!!!")
})