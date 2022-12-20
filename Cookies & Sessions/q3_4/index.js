const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

let productList = [{id: 1, name: "Laptop", description: "Laptop", price: 500, quantity: 10},
                    {id: 2, name: "Mouse", description: "Mouse", price: 20, quantity: 5},
                    {id: 3, name: "Monitor", description: "Monitor", price: 100, quantity: 4},
                    {id: 4, name: "Iphone", description: "Iphone", price: 800, quantity: 2},
                    {id: 5, name: "Macbook", description: "Macbook", price: 1000, quantity: 15},
                    {id: 6, name: "Ipad", description: "Ipad", price: 700, quantity: 6}];

//use session
app.use(session({
    secret: 'my secret',
    resave: true,
    saveUninitialized: true
}));

//middleware
app.use(express.urlencoded({extended:true}));

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    //response
    res.render('shop', {productList});
});

app.get('/product', (req, res) => {
    const id = parseInt(req.query.id);
    const item =productList.filter(e => e.id === id)[0];

    res.render('product', {item});
});

app.post('/addToCart', (req, res) => {
    const {name, price} = req.body;
    let item = productList.find(e => e.name === name && e.quantity > 0);

    if(item){
        if(req.session.hasOwnProperty(name)) {
            const obj = req.session[name];
            console.log(obj);
            obj.quantity ++;
        } else {
            req.session[name] = {name, quantity: 1, price: parseInt(price)};
        }

        //decreate avail quantity
        item.quantity --;

    } else
        console.log('Item out of stock!');

    res.redirect(303, "/cart");
});

app.get("/cart", (req, res) => {
    const arr = [];
    for(const key in req.session){
        arr.push(req.session[key]);
    }

    res.render('shoppingcart', {items: arr});
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})

