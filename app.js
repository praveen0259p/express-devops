const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello From Express Applicatin from app1.js!");
});
module.exports = app;
