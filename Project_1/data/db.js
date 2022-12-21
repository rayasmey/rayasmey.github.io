require("dotenv").config();

const mongoose = require("mongoose");
require("../data/books-model");
require("../data/users-model");

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", function(){
    console.log("Mongoose Connected" + process.env.DB_NAME);
});
mongoose.connection.on("disconnected", function(){
    console.log("Mongoose Disconnected");
});
mongoose.connection.on("error", function(error){
    console.log("Mongoose Connection Error", error);
});

process.on("SIGINT",function(){
    console.log("Interrupt received");
    mongoose.connection.close(function(){
        console.log(process.env.SIGINT_MESSAGE);
        process.exit(0);
    });
   
});

process.on("SIGTERM",function(){
    console.log("Terminate received");
    mongoose.connection.close(function(){
        console.log(process.env.SIGTERM_MESSAGE);
        process.exit(0);
    });
   
});

process.on("SIGUSR2",function(){
    console.log("Restart received");
    mongoose.connection.close(function(){
        console.log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid,"SIGUSR2");
    });
   
});