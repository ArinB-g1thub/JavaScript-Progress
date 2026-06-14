/*
     *
    ***
   *****
  *******
 *********
*/

for (let i = 1; i <= 4; i++) {
    let space = ""
    let pattern = ""
    
    for (let j = 1; j <= 4 - i; j++) {
        space += " "
    }
    
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*"
    }
    
    console.log(space + pattern)
}