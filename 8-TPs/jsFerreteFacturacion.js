/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var p1;
var p2;
var p3;
var suma;
var promedio;

function Sumar () 
{
    p1 = document.getElementById("PrecioUno").value;
    p2 = document.getElementById("PrecioDos").value;
    p3 = document.getElementById("PrecioTres").value;

    
    suma = parseInt(p1) + parseInt(p2) + parseInt(p3);
    
    alert(suma);
}
function Promedio () 
{
    p1 = document.getElementById("PrecioUno").value;
    p2 = document.getElementById("PrecioDos").value;
    p3 = document.getElementById("PrecioTres").value;

    suma = parseInt(p1) + parseInt(p2) + parseInt(p3);
    promedio = suma / 3
    
    alert(promedio);
}
function PrecioFinal () 
{
    p1 = document.getElementById("PrecioUno").value;
    p2 = document.getElementById("PrecioDos").value;
    p3 = document.getElementById("PrecioTres").value;

    suma = parseInt(p1) + parseInt(p2) + parseInt(p3);
    promedio = suma * 21 / 100;
    precioFinal = suma + promedio;
    
    alert(precioFinal);
    
	
}