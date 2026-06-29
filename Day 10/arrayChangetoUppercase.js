// convert 5 city names to uppercase (forEach and map method both can be used.)

const ListofCities=()=>{
    let cities = ["Kathmandu", "Lalitpur", "Bhaktapur", "Butwal", "Pokhara"];
    console.log(cities);
    
    let uppercaseCities = cities.map((city) => {
        return city.toUpperCase();
    })
    console.log(uppercaseCities);
}
ListofCities();