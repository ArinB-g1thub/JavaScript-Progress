// create a camculator that performs add, sub, mul and div using if-else-if statements using JS.
let a = Number(prompt("Enter the first number: "))
let b = Number(prompt("Enter the second number: "))
let operator = prompt("Enter the operator (+, -, *, /): ")

if (operator === "+") {
    console.log(a + b)
    alert("The answer is " + (a + b))
}
else if (operator === "-") {
    console.log(a - b)
    alert("The answer is " + (a - b))
}
else if (operator === "*") {
    console.log(a * b)
    alert("The answer is " + (a * b))
}
else if (operator === "/") {
    console.log(a / b)
    alert("The answer is " + (a / b))
}
else {
    console.log("Invalid operator")
    alert("Invalid operator")
}
