/* 
    1
    1 2
    1 2 3
    1 2 3 4 5
*/


for (let i = 0; i <= 5; i++) {
    let pattern = ""
    for (let j = 1; j <= i; j++) {
        pattern += j
    }
    console.log(pattern)
}