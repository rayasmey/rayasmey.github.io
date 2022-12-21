const mongoose = require("mongoose");
const userSchema= mongoose.Schema({
     
        name: String,
        username: String,
        password: String,  
        
});


mongoose.model(process.env.USER_MODEL, userSchema,process.env.USERS_COLLECTION);