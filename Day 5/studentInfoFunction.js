// Create a function named studentInfo and display student info.

function studentInfo(name, subject, semester){
    console.log("Your name is: " + name);
    console.log("You are studying: " + subject);
    console.log("You are in "+ semester + " semester.");
}

let name = prompt("What is your name?");
let subject = prompt("What are you studying?");
let semester = prompt("What semester are you in?");

studentInfo(name, subject, semester);