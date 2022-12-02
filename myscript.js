function max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}


function maxThree(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
} else{
    return c;
}
}


function isVowl(char){
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
        return true;
    }else{
        return false;
    }
}

function sum(array){
    let total=0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    return total;
}

function multiply(array){
    let mult=0;
    for(let i=0; i<array.length; i++){
        mult*=array[i];
    }
    return mult;
}

function reverse(strng){
    let reverseString;
    for (let i=strng.length; i>0; i--){
        reverseString += strng.charAt[i];
    }

    return reverseString;
}

function findLongestWord(arrayStrng){
    let longstr=arrayStrng.length[0];
    for(let i=1; i<arrayStrng.length; i++){
        if(longstr < arrayStrng[i])
        longstr = arrayStrng[i];
    }
   
    return longstr; 
}

function filterLongWords(arrayString, x){
    const longStrArray = [];
    let j=0;
    for (let i=0; i< arrayString.length; i++){
        if (x < arrayString.length[i]){
        longStrArray[j] += arrayString[i];
        j++;
    }
}
    return longStrArray;
}  



function myFunctionTest (x, maxFunction){
    let y = max(10,20);
    if (20 === y){
        console.log("TEST SUCCEEDED");
    } else
    console.log("TEST FAILED");
}

myFunctionTest();


console.log("Expected output of max(20,10) is 20 and  " +
   myFunctionTest(10, function(){return max( 20, 10); }));


const a = [1,3,5,3,3]; 
const b = a.map(function(elem, array) {
  return elem * 10;
})
document.writeln(b.toString() + "<br/>");

const c = a.filter(function(elem, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");

const d = a.reduce((total,y)=>total * y,1);
document.writeln(d+ "<br/>");





