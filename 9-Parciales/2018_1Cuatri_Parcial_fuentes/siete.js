function mostrar()
{
    var contador=0;
    var promedioNotasTotales;
    var acumuladorNotas = 0;
    var sexoMinimo;
    var contadorVarones=0;
    var notaMasBaja;
    var primeraVez = true;
    
    
    while (contador < 5) {
        var notas = prompt("Ingrese una nota");
        notas = parseInt(notas);
        while (isNaN(notas) || (notas <1 || notas >10) ) {
            notas = prompt("Error: Ingrese una nota valida");
            notas = parseInt(notas);
        }
        var sexo = prompt("Ingrese un sexo");
        while (sexo != "f" && sexo != "m"){
            sexo = prompt("Error: Ingrese un sexo valido");
    } 
    if (sexo == "m" && notas>=6) {
        contadorVarones++;
    }else if (primeraVez) {
        primeraVez = false;
        notaMasBaja = notas;
        sexoMinimo = sexo;
    
    } 
      else if (notas < notaMasBaja) {
        notaMasBaja = notas;
        sexoMinimo = sexo;
    
    }else{}

     contador++;
     acumuladorNotas += notas;   
    }

promedioNotasTotales = acumuladorNotas / contador;
promedioNotasTotales = parseInt(promedioNotasTotales);
alert("El promedio de notas es " + promedioNotasTotales);
alert("La nota mas baja es " + notaMasBaja + " y su sexo es " + sexoMinimo);
alert("La cantidad de varones son " + contadorVarones);

}
