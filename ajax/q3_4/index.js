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
    resave: false,
    saveUninitialized: true
}));

//middleware
app.use(express.urlencoded({extended:true}));

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

//middleware to initialize session object
app.use((req, res, next) => {
    if(!req.session.list)
        req.session.list = [];
    next();
});

app.get('/', (req, res) => {
    //response
    res.render('shop', {productList});
});

app.get('/product', (req, res) => {
    const id = parseInt(req.query.id);
    const item =productList.find(e => e.id === id);

    res.render('product', {item, count: req.session.list.length});
});

app.post('/addToCart', (req, res) => {
    const {name, price} = req.body.data;
    let item = productList.find(e => e.name === name && e.quantity > 0);
    
    if(item){
        const { list } = req.session; //get list from session
        const current = list.find(e => e.name === name);
        if(current){
            current.quantity ++;
            current.price += parseInt(price)
        } else 
            list.push({name, quantity: 1, price: parseInt(price)});

        //decreate avail quantity
        item.quantity --;
        res.send(JSON.stringify(list.length));

    } else {
        console.log('Item out of stock!');
        res.send('');
    }
});

app.get("/cart", (req, res) => {
    const { list } = req.session;
    res.render('shoppingcart', {items: list});
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})

