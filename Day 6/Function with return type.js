// Function with Return type

//  FUNCTION BASICS RECAP & PARAMETERS
function greetUser(username) {
    console.log("Hello, " + username );
}

greetUser("Arin"); // Calling the function with an argument



//  RETURN KEYWORD 

function sayName(){
    let name = prompt("Enter Your Name: ");
    return name;
}
// console.log(sayName());



function calculateSquare(number) {
    return number * number; // Sends the value back to the caller
}

// let result = calculateSquare(5);
// console.log("The square of 5 is:", result);



// RETURN VS LOGGING (console.log vs return)
// console.log() -> Performing an action  returnType -> void
function logMessage() {
    console.log("This just prints to the console."); 
}

// return -> Returning a value 
function returnMessage() {
    return "This data can be stored or used later.";
}
// let value1 = logMessage();    // doesnt store value, prints the message, 
// let value2 = returnMessage(); // stores the returned value, doesnt print the message

// console.log("Value from logMessage():", value1);   // prints undefined beacuse it doesnt store value
// console.log("Value from returnMessage():", value2); // "prints the value



//  PARAMETER AND RETURN
// Checking Age Validity
function isValidAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
// console.log("Is 20 a valid age, " + isValidAge(20));
// console.log("Is 15 a valid age, " + isValidAge(15));



// Return even or not
function isEven(num) {
    return num % 2 === 0; // Returns true if even, false if odd
}
// console.log("Is 7 even?", isEven(7));
// console.log("Is 12 even?", isEven(12));



// Return Greater Number
function getGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
//console.log("Greater between 45 and 87 is:", getGreaterNumber(45, 87));



// RETURN TYPE (Flexibility in JavaScript)
function ReturnTypes(ValueType) {
    if (ValueType === "string") {
        return "I am a String"; // Returns a String
    } else if (ValueType === "integer") {
        return 42;             // Returns an Integer
    } else if (ValueType === "float") {
        return 3.14159;        // Returns a Float
    } else {
    return null;
    }
}
// console.log(ReturnTypes("string"));