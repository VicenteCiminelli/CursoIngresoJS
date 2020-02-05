/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
  var n1;
  var n2;
  var suma;

  n1 = document.getElementById("numeroUno").value;

  n2 = document.getElementById("numeroDos").value;

  suma = parseInt(n1) + parseInt(n2);

  alert("la suma es : " +suma);

}

function restar()
{
  var n1;
  var n2;
  var suma;

  n1 = document.getElementById("numeroUno").value;

  n2 = document.getElementById("numeroDos").value;

  suma = parseInt(n1) - parseInt(n2);

  alert("la resta es : " +suma);

}

function multiplicar()
{
  var n1;
  var n2;
  var suma;

  n1 = document.getElementById("numeroUno").value;

  n2 = document.getElementById("numeroDos").value;

  suma = parseInt(n1) * parseInt(n2);

  alert("la multiplicacion es : " +suma);

}

function dividir()
{
  var n1;
  var n2;
  var suma;

  n1 = document.getElementById("numeroUno").value;

  n2 = document.getElementById("numeroDos").value;

  suma = parseInt(n1) / parseInt(n2);

  alert("la divicion es : " +suma);

}

