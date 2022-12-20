const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// let logger = require('morgan');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.get("/", (req, res) => {
    let cookies = [];
    for(c in req.cookies){
        cookies.push({key: c, value: req.cookies[c]});
    }
    res.render("index.ejs", {cookies});
});

app.post("/", (req, res) => {
    let key = req.body.key;
    let value = req.body.value;
    res.cookie(key, value);
    res.redirect('/');
});

app.listen(3000);