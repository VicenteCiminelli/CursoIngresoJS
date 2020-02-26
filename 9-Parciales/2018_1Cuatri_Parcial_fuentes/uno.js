
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

        largo = prompt("ingrese el largo");
        largo = parseInt(largo);

    while(isNaN(largo) || largo < 1){
        largo = prompt("ingrese el largo");
        largo = parseInt(largo);
    }

        ancho = prompt("ingrese el ancho"); 
        ancho = parseInt(ancho);   

    while(isNaN(ancho || ancho < 1)){
        ancho = prompt("ingrese el ancho"); 
        ancho = parseInt(ancho);
    }
    
    perimetro = ((largo + ancho) * 2);

    alert(perimetro);

}
