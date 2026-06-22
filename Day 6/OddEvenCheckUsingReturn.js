// task: odd/Even check using return

function checkOddEven(number){
    if (number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log("is 10 an even number? " + checkOddEven(10));
console.log("is 11 an even number? " + checkOddEven(11));
