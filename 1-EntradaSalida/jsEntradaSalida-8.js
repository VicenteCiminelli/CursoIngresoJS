/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var n1;
  var n2;
  var resultado;

  n1 = document.getElementById("numeroDividendo").value;

  n2 = document.getElementById("numeroDivisor").value;

  resultado = parseInt(n1) % parseInt(n2);

  alert("El resto es : " +resultado);
//

}
