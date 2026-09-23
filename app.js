const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello From Express Applicatin from app11111111.js!");
});
module.exports = app;
