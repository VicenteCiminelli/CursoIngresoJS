function mostrar()
{
    var edad
    edad = document.getElementById("edad").value;

    if (edad < 13 || edad > 17) {
        edad = document.getElementById("edad").value;
        alert("Usted no es Adolecente");
    }


}//FIN DE LA FUNCIÓN