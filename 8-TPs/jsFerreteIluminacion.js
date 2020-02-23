/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var descuento = 0;
    var ingresosBrutos;
    var cantidad = document.getElementById("Cantidad").value;
    var marca = document.getElementById("Marca").value;
    var total = cantidad * 35;
    //punto A
    if (cantidad >= 6) {
        descuento = total * 0.50;

    } else if (cantidad == 5) { //punto B
        if (marca == "ArgentinaLuz") {
            descuento = total * 0.40;
        }
        else {
            descuento = total * 0.30;
        }

    } else if (cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas") //punto C
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            descuento = total * 0.25;
        }
        else {
            descuento = total * 0.20;
        }

    }
    else if (cantidad == 3) {
        if (marca == "ArgentinaLuz") //punto D
        {
            descuento = total * 0.15;
        }
        if (marca == "FelipeLamparas") {
            descuento = total * 0.10;
        }
        else {
            descuento = total * 0.05
        }
    }

    total -= descuento;
    if(total > 119)//Punto E
    {
        ingresosBrutos = total * 0.1;
        total = total + ingresosBrutos;
        alert("Usted pago "+ingresosBrutos+" de IIBB.");
    }
    document.getElementById("precioDescuento").value = total;


}
