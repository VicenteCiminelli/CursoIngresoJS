/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var n1;
  var n2 = 10;
  var n3 = 100;
  var resultado;
  var final;

  n1 = document.getElementById("sueldo").value;

  resultado = (parseInt(n1) * parseInt(n2) / parseInt(n3));

  final = resultado + parseInt(n1);

  document.getElementById("resultado").value = final;


}
