
function sum(arr){
    return arr.reduce((acc, i) => acc + i, 0);
}

function multiply(arr){
    return arr.reduce((acc, i) => acc * i, 1);
}

function reverseString(str){
    return [...str].reduce((x, y)=> y.concat(x));
}

function filterLongWords(arr, i){
    return arr.filter(x => x.length > i);
}


