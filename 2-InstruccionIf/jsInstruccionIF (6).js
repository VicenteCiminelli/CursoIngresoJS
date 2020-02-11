function mostrar()
{
    var edad
    edad = document.getElementById("edad").value;

    if (edad >= 13 && edad <= 17) {
        edad = document.getElementById("edad").value;
        alert("Usted es Adolecente");
    }
    
    if(edad >= 18){
            edad = document.getElementById("edad").value;
            alert("Eres mayor de Edad");
    }

    if(edad <= 12){
        edad = document.getElementById("edad").value;
        alert("Eres menor de Edad");
    }



}