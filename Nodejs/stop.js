const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
let sum = 0;
let asker = function(){
   
    readline.question("Enter a number. Enter \'stop\' to quit: ", function(input){
        if(input == "stop"){
            console.log(`Sum is: ${sum}`);
            readline.close();
        }
        else{
            sum += parseInt(input);
            asker();
        } 
    })
};
asker();