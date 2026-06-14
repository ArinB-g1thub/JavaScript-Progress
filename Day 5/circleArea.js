/* create function caldulateArea which 
takes radius of circle and returns its area 
*/

function calculateArea(radius, pi, area){
    console.log("The area of your circle is: " + area);
}
    let radius =  prompt("Enter the radius of your circle:")
    let pi = 3.14159;
    let area = pi * radius * radius;
calculateArea(radius, pi, area);