const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = parseInt(req.query.age);
    if (!name) {
        name = "person";
    }
    if(!age){
        age = "0";
    }
    res.send(`Welcome ${name}, aged ${age}`);
    
});
app.listen(3000, () => {
    console.log("Started...");
});
