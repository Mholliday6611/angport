var express = require("express");
var path = require("path");
var app = express();
var mongoose =require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var multer = require('multer');

app.use("/client", express.static(path.join(__dirname, "../client")));
app.use("/templates", express.static(path.join(__dirname, "../client/templates")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

routes(app)

app.listen(process.env.PORT || 8080)
mongoose.connect("mongodb://localhost/portfolio");
// mongoose.connect(process.env.DB_URL);