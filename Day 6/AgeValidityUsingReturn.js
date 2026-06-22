// checking age validity
function isValidAge(age){
    if (age >= 18){
        return true;
    }
    else{
        return false;
    
    }
}

console.log("is 20 a valid age? " + isValidAge(20));
console.log("is 17 a valid age? " + isValidAge(17));
