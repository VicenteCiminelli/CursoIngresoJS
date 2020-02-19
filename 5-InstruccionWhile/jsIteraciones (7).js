function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;
	
	while (respuesta) { 
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		
		while(isNaN(numero)) {
	    var numero = prompt("ingrese un numero valido"); 
		numero = parseInt(numero);
	 }
	 contador++;
    respuesta = confirm("¿ desea continuar ?")
	 acumulador += numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN