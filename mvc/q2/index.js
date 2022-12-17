const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, 'view')));

app.use((req, res, next) => {
    next();
});


app.get("/", (req, res) => {
    res.render('form');
});

app.post("/result", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "0";
    }
    res.render('result', {name, age});
});


app.listen(3000, () => {
    console.log("Listening to port 3000.......");
});