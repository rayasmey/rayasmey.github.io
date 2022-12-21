const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next)=>{
    next();
});

const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];


app.get("/", (req, res)=>{
    res.render('index.ejs');
});

app.get("/8ball", (req, res)=>{
    let index = Math.round(Math.random() * answers.length);
    let value = answers[index];
    res.send(value);
});

app.listen(3000, ()=>{
    console.log("App running on 3000....");
})