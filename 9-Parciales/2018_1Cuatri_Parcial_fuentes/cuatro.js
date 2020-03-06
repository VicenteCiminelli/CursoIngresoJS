function mostrar()
{
    var n1;
    var n2;
    var resultado;
    var suma;
    var resta;

    n1 = prompt("ingrese numero 1")
    n2 = prompt("ingrese numero 2")

    if(n1 == n2){
        resultado = n1 + n2
        alert(resultado);
    }else{
        n1 = parseInt(n1);
        n2 = parseInt(n2);
    } if(n1 > n2){
        n1 = parseInt(n1);
        n2 = parseInt(n2);

        resta = n1 - n2;

        alert(resta);
    }else{
        n1 = parseInt(n1);
        n2 = parseInt(n2);

        suma = n1 + n2;

        alert(suma);
    }
    if(suma > 10){
        alert("la suma es " + suma + " y supero el 10")
    }

}
/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10". */
