function mostrar()
{	
	var respuesta= true;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorDePares = 0;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferenciaPositivosYNegativos;


	while(respuesta){

		var numero = prompt("ingrese un numero")
		numero = parseInt(numero);
		
		while(isNaN(numero)) {
			var numero = prompt("ingrese un numero valido"); 
		    numero = parseInt(numero);
		
	        if (numero > 0){
				//punto 2
				sumaPositivos += numero;
                //punto 3
		        contadorPositivos++;

	        }else if (numero < 0){
			
			//punto 1
		    sumaNegativos += numero;
			contadorNegativos++;

			}else{
				//punto 6
				contadorCeros++;
            }
			if (numero % 2 == 0){
				contadorDePares++;
			}
	    }
     respuesta = confirm("¿Desea Continuar?");
	}//fin while

	//punto 7
	promedioDePositivos = sumaPositivos / contadorPositivos;
	console.log(sumaPositivos)
	console.log(contadorPositivos)
    console.log(sumaPositivos)


   //punto 8
   promedioDeNegativos = sumaNegativos / contadorNegativos;

   //punto 9
   diferenciaPositivosYNegativos = sumaPositivos - sumaNegativos;

   document.write("promedio De Positivos: " + promedioDePositivos + "<br>")
   document.write("promedio De Negativos: " + promedioDeNegativos + "<br>")
   document.write("diferencia: " + diferenciaPositivosYNegativos + "<br>")
   document.write("suma de negativos: " + sumaNegativos + "<br>")
   document.write("suma de positivos: " + sumaPositivos + "<br>")
   document.write("contador de Positivos: " + contadorPositivos + "<br>")
   document.write("contador de Negativos: " + contadorNegativos + "<br>")
   document.write("cantidad de ceros: " + contadorCeros + "<br>")
   document.write("cantidad de numeros pares: " + contadorDePares + "<br>")





}