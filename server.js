require('dotenv').config()
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//set static content for app from the public folder
app.use(express.static("public"));

//create req.body and parse it
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//set handlebars.

var exphbs = require("express-handlebars");

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT,function(){
    console.log("server listening on: http://localhost:"+ PORT);
});