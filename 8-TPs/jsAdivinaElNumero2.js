/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos;
var max;
var min;
var numeroIngresado;
contadorIntentos = 0;
min = 1;
max = 101;

function comenzar() {
	numeroSecreto = Math.floor(Math.random() * (max - min)) + min;
	console.log(numeroSecreto);

}

function verificar() {
	numeroIngresado = document.getElementById("numero").value;
	contadorIntentos = contadorIntentos + 1;
	var mensaje;
	document.getElementById("intentos").value = contadorIntentos;
	if (numeroSecreto == numeroIngresado) {
		alert("Usted es un ganador en solo " + contadorIntentos + " intentos.");
	
		switch(contadorIntentos){
		case 1 : 
		mensaje = "usted es un psiquico";
		break;
		
		case 2 : 
		mensaje = "excelente percepción";
		break;
		
		case 3 : 
		mensaje = "Esto es suerte";
		break;
		
		case 4 : 
		mensaje = "Excelente técnica";
		break;
		
		case 5 : 
		mensaje = "usted está en la media";
		break;
		
		default:
			if(contadorIntentos >= 6 && contadorIntentos <=10){
				mensaje = "falta tecnica";
			} else if (contadorIntentos >= 11) {
				mensaje = "afortunado en el amor!!";
			}	
		break;
		}
		alert(mensaje);
	} else if (numeroIngresado < numeroSecreto) {
		alert("Falta...");
	} else {
		alert("Se paso...");
	}


/*	if (contadorIntentos == 1) {
	mensaje = "usted es un psiquico";
	}else if (contadorIntentos == 2) {
			mensaje = "excelente percepción";
		}else if (contadorIntentos == 3) {
				mensaje = "Esto es suerte";
		} else if (contadorIntentos == 4) {
					mensaje = "Excelente técnica";
		} else if (contadorIntentos == 5) {
						mensaje = "usted está en la media";
		} else if (contadorIntentos >= 6 && contadorIntentos <=10) {
							mensaje = "falta técnica";
		} else if (contadorIntentos >= 11) {
								mensaje = "afortunado en el amor!!";
		}		*/				
	
	}