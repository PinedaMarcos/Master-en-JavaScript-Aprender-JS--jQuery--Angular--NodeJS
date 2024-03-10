'use strict'

//dos nuemros, que diga cual es mayor, el menor o si son iguales

var num1 = parseInt(prompt("Introuce el segundo numero", 0));
var num2 = parseInt(prompt("Introuce el segundo numero", 0));

if(num1 == num2){
    console.log("los numeros son iguales");
} else if(num1 > num2){
    console.log(num1 + " es mayor que " + num2);
} else if(num1 < num2){
    console.log(num1 + " es menor que "+ num2)
}else{
    alert("Escribe numeros correctos")
}