// takes 2 input and calculates.

function calculate(num1, num2, calc){
    if (calc === "+"){
        console.log("The result is: ")
        result = num1 + num2;
    }
    else if (calc === "-"){
        console.log("The result is: ")
        result = num1 - num2;
    }
    else if (calc === "*"){
        console.log("The result is: ")
        result = num1 * num2;
    }
    else if (calc === "/"){
        console.log("The result is: ")
        result = num1/num2;
    }
    else {
        console.log("Invalid operation. Please enter +, -, *, or /.");
        return;
    }
    console.log(result); 
}
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
    let calc = prompt("Enter the operation (+, -, *, / ): ");

    calculate(num1, num2, calc);