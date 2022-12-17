module.exports = class{
    constructor(name, price, desc, id){
        this.name=  name;
        this.price = price;
        this.desc = desc;
        this.id = id;
    }

    productData(){
        return ("Product name: " + this.name + ",    Price: " + this.price + ",    Description: " + this.desc 
               + ",    ProductID: " + this.id);
    }
};