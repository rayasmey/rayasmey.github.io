const express = require('express'); 
const path = require('path');
const app = express();


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, 'view')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();

    let style = (hour >=6 && hour < 18 ? 'day' : 'night');
    
    res.render("index.ejs", {
        time: date.toTimeString(),
        style: style
    });
});
app.listen(3000, () => {
    console.log("Listening to port 3000...");
});