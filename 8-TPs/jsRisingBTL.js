/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var respuesta = true;
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var nLegajo;
    var nacionalidad;

    do
    {
        edad = prompt("ingrese edad");
        edad = parseInt(edad);
    }
    while(isNaN(edad) || edad < 18 || edad > 90);
    do
    {
        sexo = prompt("ingrese sexo “M” para masculino y “F” para femenino");
    }
    while(!isNaN(sexo) || sexo != "m" && sexo != "f");
    do
    {
        estadoCivil = prompt("ingrese estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    }
    while(isNaN(estadoCivil) || estadoCivil != "1" && estadoCivil != "2" && estadoCivil != "3" && estadoCivil != "4");
    do
    {
        sueldo = prompt("ingrese sueldo");
        sueldo = parseInt(sueldo);
    }
    while(isNaN(sueldo) || sueldo < 8000);
    do
    {
        nLegajo = prompt("ingrese nLegajo");
        nLegajo = parseInt(nLegajo);
    }
    while(isNaN(nLegajo) || nLegajo < 1000 || nLegajo > 9999);
    do
    {
        nacionalidad = prompt("ingrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados ");
    }
    while(!isNaN(nacionalidad) || nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n");

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadoCivil;
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = nLegajo;
    document.getElementById("Nacionalidad").value = nacionalidad;
 
}
