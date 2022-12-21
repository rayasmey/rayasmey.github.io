require("dotenv").config();
require("./data/db");
const path = require("path");
const express = require("express");

const routes = require("./routes");

//const booksRoute = require("./routes/booksRoute");
const app = express();

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use("/", function(req, res, next){
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/",routes);

    const server= app.listen(process.env.PORT, function() {
    const port= server.address().port;
    console.log(process.env.MSG_SERVER_START, port);});
    
