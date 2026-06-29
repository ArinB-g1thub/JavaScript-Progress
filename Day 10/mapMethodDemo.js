// create an array of prices and increase all by 100. (use .map())

const ListofPrices=()=>{
    let prices = [200, 3000, 5000, 3405, 9000];
    console.log(prices);
    
    let newPrices = prices.map((price) => {
        return price + 100;
    })
    console.log(newPrices);
}
ListofPrices();