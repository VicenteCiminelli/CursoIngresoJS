function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt("ingrese precio");
    precio = parseInt(precio);
    while(isNaN(precio) || precio < 0){
        precio = prompt("ingrese un precio valido");
        precio = parseInt("precio");
    }
    descuento = prompt("ingrese porcentaje de descuento")
    descuento = parseInt(descuento);
    while(isNaN(descuento) || descuento < 0){
        descuento = prompt("ingrese un precio valido");
        descuento = parseInt(descuento);
    }
    precioFinal = (precio * descuento) / 100
    precioFinal = precio - precioFinal;

    document.getElementById("elPrecioFinal").value = precioFinal

}
