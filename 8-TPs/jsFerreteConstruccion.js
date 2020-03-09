/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
    var largo;
    var ancho;
    var resultado;
    var cal = 3;
    var cemento = 2;
    var total;
    var radio;
    var totalAlambre;
    var resultado2;

function Rectangulo () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    resultado = (largo *2 + ancho *2) * 3;

    alert(resultado);



}
function Circulo () 
{
 

    radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    
    totalAlambre = 2 * Math.PI * radio *3;

    alert(totalAlambre);
}
function Materiales () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    total = largo * ancho;

    resultado = cal*total;

    resultado2 = cemento*total;

    alert("cal = " +resultado);
    alert("cemento = "+resultado2);
}