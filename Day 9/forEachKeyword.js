const favcolor=()=>{
    let colors = ["Red", "Blue", "Green", "Yellow"];
    console.log(colors);
    // using function
    colors.forEach(function(color){
        console.log(color)
    })
    // using arrow function
    colors.forEach((color)=>{
        console.log(color)
    })
}
favcolor();