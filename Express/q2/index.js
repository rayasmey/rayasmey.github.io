const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    next();
});


app.get("/", (req, res) => {
    res.send(` <form action="http://localhost:3000/result" method="post">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name">
                  <label for="age">Age</label>
                  <input type="text" id="age" name="age">
                  <button type="submit">Submit Query</button>
               </form>`);
});

app.post("/result", (req, res) => {
    let name = req.body.name;
    let age = parseInt(req.body.age);
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "0";
    }
    res.send(`Welcome ${name}, aged ${age}`);
});


app.listen(3000, () => {
    console.log("Listening to port 3000.......");
});