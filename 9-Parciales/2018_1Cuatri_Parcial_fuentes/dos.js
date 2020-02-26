function mostrar()
{
    var nombre;
    var localidad;

    nombre = document.getElementById("elNombre").value;

    while(!isNaN(nombre)){
       nombre = document.getElementById("elNombre").value;
    } 

    localidad = document.getElementById("laLocalidad").value;
    
    if(localidad){
       localidad = document.getElementById("laLocalidad").value;
    }else{
        localidad = ("undefided")
    }
    
    alert("usted es " + nombre + " y vive en la localidad de " + localidad);
}
