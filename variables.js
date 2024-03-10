'use strict'

var pais = "Mexico";
var continente = "America"
var antiguedad = 2019;

var pais_y_contiente = pais + ' ' + continente;

console.log(pais, continente, antiguedad, pais_y_contiente);

//Variables let y var
//prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero) //valor 50
}
console.log(numero) //valor 50

//prueba con let
let prueba = "Hola"; //valor Hola
console.log(prueba);

if(true){
    let prueba = "hola x2"; //valor hola x2
    console.log(prueba);
}
console.log(prueba) //valor Hola