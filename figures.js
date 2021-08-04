//Code of a square
console.group("Square");


function perimeter_square(side) {
    return side * 4;
}
function area_square(side) {
    return side * side;
}
console.groupEnd();


//Code of a triangle
console.group("Triangle");


function perimeter_triangle(side_01, side_02, base) {
    return side_01 + side_02 + base;
}
function area_triangle(base, height) {
    return (base * height) /2;
}
console.groupEnd();


//Code of a circle
console.group("circle");


const pi = Math.PI;

function diam(radius){
    return radius * 2;
} 
function perimeter_circle(radius){
    const diame = diam(radius);
    return diame * pi;
}
function area_circle(radius){
    return pi * (radius * radius);
}
console.groupEnd();

//Here start to interact with html

//Square
function calculatePerimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = perimeter_square(value);
    alert(perimeter);
}
function calculateAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const area = area_square(value);
    alert(area);
}

//Triangle CHEEECKKKKK AREAA TRIANGLEEEE
//we could make an function for inputs and then call values with function_name.ref()
const input_01 = document.getElementById("InputTriangle_01");
const input_base = document.getElementById("InputTriangle_base");

function calculatePerimeterTriangle(){
    const value_side = Number(input_01.value);
    const value_base = Number(input_base.value);

    const perimeter_trian = perimeter_triangle(value_side, value_side, value_base);
    alert(`The perimeter its: ${perimeter_trian}.`);
}
function calculateAreaTriangle(){
    const value_side = Number(input_01.value);
    const value_base = Number(input_base.value);
    const height = Math.sqrt((value_side * value_side)-(value_base * value_base *.25));

    const area_trian = area_triangle(value_base, height);
    alert(`The area its ${area_trian} and its height its ${height}.`);
}


//Circle
//we could make an function for inputs and then call values with function_name.ref()
const input_radius = document.getElementById("InputCircle");

function calculatePerimeterCircle(){
    const value_radius = Number(input_radius.value);
    const perimeter_circ = perimeter_circle(value_radius);
    alert(perimeter_circ);
}
function calculateAreaCircle(){
    const value_radius = Number(input_radius.value);
    const area_circ = area_circle(value_radius);
    alert(area_circ);
}

