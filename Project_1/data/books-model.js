const mongoose = require("mongoose");
const authorSchema= mongoose.Schema({
     
        Name_of_Author: String,
        Year_of_Birth: Number     
        
});

const bookSchema = mongoose.Schema({
    Title: {
            type: String,
            required: true
           },
    Year:Number,
    Publisher:{
            type: String,
            required: true
       },
    Author: [authorSchema]
});

mongoose.model(process.env.BOOK_MODEL, bookSchema,"books_collection");