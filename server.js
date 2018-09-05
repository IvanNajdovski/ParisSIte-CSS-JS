const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "/");

app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log("Portal open on post 3000");
});
