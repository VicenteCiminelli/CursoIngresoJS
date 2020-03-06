function mostrar()
{
    var respuesta = true;
    var marca;
    var peso;
    var temperatura;
    var contadorTemperaturaPar = 0;
    var primeraVez = true;
    var productoPesado;
    var marcaPesada;
    var productoGrado;
    var productoLibiano;
    var contadorPeso = 0;
    var promedioDePeso;
    var acumuladorPeso = 0;
    var contadorDeFrio = 0;
     
    while(respuesta){
         marca = prompt("ingrese marca");
         while(!isNaN(marca)){
             marca = prompt("ingrese una marca valida");
         }
         peso = prompt("ingrese peso");
         peso = parseInt(peso)
         while(isNaN(peso) && (peso > 100 || peso < 1)){
             peso = prompt("ingrese un peso valido");
             peso = parseInt(peso);
         }
         temperatura = prompt("ingrese la temperatura");
         temperatura = parseInt(temperatura);
         while(isNaN(temperatura) && temperatura > 30 || temperatura < - 30){
             temperatura = prompt("ingrese temperatura valida");
             temperatura = parseInt(temperatura);
         }
         if(temperatura % 2 == 0){
             contadorTemperaturaPar++;
         }
         if(primeraVez){
             primeraVez = false;
             productoPesado = peso;
             marcaPesada = marca;
             productoGrado = marca;
             productoLibiano = peso;
         }else if(peso > productoPesado){
             productoPesado = peso;
             marcaPesada = marca;
         }else if(temperatura < 0){
             contadorDeFrio++;
         }else if(productoLibiano > peso){
             productoLibiano = peso
         }else if (peso > 0){
             contadorPeso++;
             acumuladorPeso += peso;
         }
         acumuladorPeso = parseInt(acumuladorPeso)

         promedioDePeso = acumuladorPeso / contadorPeso
         
        respuesta = confirm("desea continuar ?");
     }

     document.write("La cantidad de temperaturas pares. " + contadorTemperaturaPar +"<br>")
     document.write("La marca del producto más pesado " + marcaPesada +"<br>")
     document.write("La cantidad de productos que se conservan a menos de 0 grados. " + contadorDeFrio + "<br>")
     document.write("El promedio del peso de todos los productos. " + promedioDePeso +"<br>")
     document.write("El peso máximo "+  productoPesado +" y el mínimo " + productoLibiano + "<br>")


}
/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
