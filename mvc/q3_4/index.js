const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/products');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, 'view')));

app.use((req, res, next) => {
    next();
});



const productList = [
    new Product("Samsung S22", 900, "Ultra", 1234),
    new Product("IPhone 13", 1000, "Pro Max", 4321),
    new Product("Google Pixel 4", 500, "4a", 2354),
    new Product("Lenovo G50", 400, "ThinkPad", 2554),
    new Product("Samsung S10", 600, "Pro max", 2545)
];
let product ;
app.get("/", (req, res)=>{
    res.render('product.ejs', {products: productList});
});
app.post("/addToCart", (req, res)=>{
    let obj = req.body;
    let pId = obj.id;
    product = productList.filter(p=>p.id == pId)[0];
    res.redirect(`/cart`);
});

app.get("/cart", (req, res)=>{
    res.render('shoppingcart', {p:product});
});
app.listen(3000, () => {
    console.log("Listening to port 3000.......");
});