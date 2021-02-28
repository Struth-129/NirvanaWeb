var express = require("express");
var path = require("path");
const cors = require("cors");
const compress = require("compression");
const helmet = require('helmet');
var app = express();
app.use(compress());
app.use(helmet());
app.use(cors())
app.use(express.static(path.join(__dirname, "build")));

app.use(express.static("build", { index: "/index.html" }));

app.listen(8000 , () =>console.log('connected'));


app.use(function(req, res, next) {
  if (/^\/v1.0\//.test(req.url)) {
    next();
  } else {
    res.sendFile(__dirname + "/build/index.html");
  }
});
