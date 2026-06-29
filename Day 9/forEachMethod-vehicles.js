// create a function name vehicles and store 6 vehicles in an array
// and print all the vehicles using forEach method

const vehicles=()=>{
    let vehicle = ["Honda Civic", "Porche 911", "Yamaha R1", "Honda Fireblade", "Ducati Panigale V4"];
    console.log(vehicle);
    
    vehicle.forEach((vehicle)=>{
        console.log(vehicle)
    })
}
vehicles();