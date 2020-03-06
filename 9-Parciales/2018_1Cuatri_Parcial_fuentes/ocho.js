function mostrar()
{
    var primeraVez = true;
    var numero;
    var respuesta = true;
    var letra;
    var contadorDeNumerosPares = 0;
    var contadorDeNumerosImpares = 0;
    var contadorDeCeros = 0;
    var acumuladorDeNumerosPositivos = 0;
    var contadorDePositivos = 0;
    var promedioDeNumerosPositivos = 0;
    var acumuladorDeNumerosNegativos = 0;
    var contadorDeNegativos = 0;
    var letraMaxima;
    var NumeroMaximo = 0;
    var letraMinima;
    var NumeroMinimo = 0;

    while(respuesta){

        letra = prompt("ingrese una letra");
        
        while(!isNaN(letra)){
            letra = prompt("ingrese una letra correcta");
        }
        numero = prompt("ingrese un numero");
        numero = parseInt(numero)
        while(numero > 100 || numero <-100){
            numero = prompt("ingrese un numero correcto");
            numero = parseInt(numero)
        } if(numero % 2 == 0){
            contadorDeNumerosPares++;
        }else{
            contadorDeNumerosImpares++;
        }if(numero == 0){
            contadorDeCeros++;
        }else if(numero > 0){
            acumuladorDeNumerosPositivos += numero;
            contadorDePositivos++;
        }else if(numero < 0){
            acumuladorDeNumerosNegativos += numero;
            contadorDeNegativos++;
        } 
        if(primeraVez){
            primeraVez = false;
            letraMaxima = letra;
            NumeroMaximo = numero;
            letraMinima = letra;
            NumeroMinimo = numero;
        }else if(numero > NumeroMaximo){
            NumeroMaximo = numero;
            letraMaxima = letra;
        }else if(numero < NumeroMinimo){
            NumeroMinimo = numero;
            letraMinima = letra;
        }
        
        promedioDeNumerosPositivos = acumuladorDeNumerosPositivos / numero
                
        respuesta = confirm("desea continuar");
    }
    document.write("La cantidad de números pares. " + contadorDeNumerosPares+ "<br>")
    document.write("La cantidad de números impares. " + contadorDeNumerosImpares+ "<br>")
    document.write("La cantidad de ceros. " + contadorDeCeros+"<br>")
    document.write("El promedio de todos los números positivos ingresados. " + promedioDeNumerosPositivos+"<br>")
    document.write("La suma de todos los números negativos. " + acumuladorDeNumerosNegativos+"<br>")
    document.write("El número maximo " + NumeroMaximo + " y la letra del máximo " + letraMaxima+"<br>")
    document.write("El numero minimo " + NumeroMinimo + " y la letra minima " + letraMinima +"<br>")

}
/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. */
