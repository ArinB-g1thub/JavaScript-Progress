/*
    1
    2 3
    4 5 6
    7 8 9 10
*/

let n = 1;
for (let i = 1; i <= 4; i++) {
    let pattern = ""
    for (let j = 1; j <= i; j++) {
        pattern += n + " "
        n++
    }
    console.log(pattern)
}