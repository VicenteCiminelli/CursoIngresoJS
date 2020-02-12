function mostrar()
{
    var edad 
    var estadoCivil

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    if (edad <18 && estadoCivil != "Soltero") {
    alert("usted es demasiado joven para no ser soltero")
    }

}