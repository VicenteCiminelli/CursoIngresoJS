function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");


	while(numero < 1 || numero > 10 || isNaN(numero)) {
		numero =prompt("numero erroneo")
		numero = parseInt(numero);

	}
	document.getElementById("Numero").value = numero;
alert("Numero ingresado correctamente")

}