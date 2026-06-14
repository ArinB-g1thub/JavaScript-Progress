function patterns(space, star){
    console.log(space + star)
}

    for (let i = 1; i <= 5; i++) {
    let space = ""
    let star = ""
    
    for (let j = 1; j <= 5 - i; j++) {
        space += " "
     }
    
    for (let j = 1; j <= 2 * i - 1; j++) {
        star += "*"
    }
    patterns(space, star);
    }