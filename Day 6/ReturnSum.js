// task: calculate sum of 2 numbers and display using return

function calculateSum(number1, number2){
    return number1 + number2;
}
let number1 = parseInt(prompt("Enter the first number: "));
let number2 = parseInt(prompt("Enter the second number: "));
   
let result = calculateSum(number1, number2);
console.log("The sum of the two numbers is: ",result);
