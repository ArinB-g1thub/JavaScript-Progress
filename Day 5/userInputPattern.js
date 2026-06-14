function pattern(){
    console.log("Pattern Generated:")
}

let Num = parseInt(prompt("Enter the last number you want to print: "));
pattern();

let n = 1;
for (let i = 1; i <= Num; i++) {
    let patt = ""
    for (let j = 1; j <= i; j++) {
        patt += i + " "
    }
    console.log(patt)
}