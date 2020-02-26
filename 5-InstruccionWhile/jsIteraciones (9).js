function mostrar()
{
	var maximo;
	var minimo;
	var primeraVez = true;
	var numero;
	var respuesta = true;

	while(respuesta != false){
		numero = prompt("ingrese un numero")
		numero = parseInt(numero);
		
		while(isNaN(numero)) {
			numero = prompt("ingrese un numero valido"); 
			numero = parseInt(numero);

		}
		if(primeraVez){
		   primeraVez = false;

		   maximo = numero;
		   minimo = numero;
		} else if( numero > maximo){
			maximo = numero;
        }
		if (numero < minimo){
			minimo = numero;
		}

   		 respuesta = confirm("¿ desea continuar ?")
	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
	
	}