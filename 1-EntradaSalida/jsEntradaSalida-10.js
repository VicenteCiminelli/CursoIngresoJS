/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var n1;
  var n2 = 25;
  var n3 = 100;
  var resultado;
  var final;

  n1 = document.getElementById("importe").value;

  resultado = (parseInt(n1) * parseInt(n2) / parseInt(n3));

  final = parseInt(n1) - resultado;

  document.getElementById("resultado").value = final;

}
