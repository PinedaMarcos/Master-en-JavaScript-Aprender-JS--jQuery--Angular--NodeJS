'use strict'

//utilizando un bucle mostrar la suma y la media de los numeros introducidos hasta introdfucir un numero negativo y ahi mostrar el resultado

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce un numero", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;

        contador++
    }
} while(numero >= 0)

alert("la suma es: " + suma);
alert("la media es:" + (suma/contador));