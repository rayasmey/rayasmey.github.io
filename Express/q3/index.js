const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use((req, res, next)=>{
    next();
});

const date = new Date();
const hour = date.getHours();

let style = '';

if(hour >= 6 && hour < 18){
    style = 'day';
}
else{
    style = 'night';
}


app.get("/", (req, res)=>{

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <link rel="stylesheet" href="css/${style}.css">
        <script>
            func
        </script>
    </head>
    <body>
        <form action="http://localhost:3000/result" method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
            <label for="age">Age</label>
            <input type="text" id="age" name="age">
            <button type="submit">Submit Query</button>
        </form>
    </body>
    </html>`);
});

app.post("/result", (req, res)=>{
    let name = req.body.name;
    let age = parseInt(req.body.age);
    if (!name) {
        name = "person";
    }
    if(!age){
        age = "0";
    }
    res.send(`Welcome ${name}, aged ${age}`);
});


app.listen(3000, ()=>{
    console.log("Listening to port 3000.......");
});