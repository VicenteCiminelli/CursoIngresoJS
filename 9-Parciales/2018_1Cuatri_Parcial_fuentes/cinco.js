function mostrar()
{
    var planeta;
    planeta = prompt("ingrese un planeta.");

    switch(planeta){
        case mercurio:
            alert("aca hace mas calor");
            break;

        case venus:
            alert("aca hace mas frio");
            break;

        case tierra:
            alert("aca vivimos");
            break;

        case marte:
            alert("aca hace mas frio");
            break;       
        case jupiter:
            alert("aca hace mas frio");
            break;
        case saturno:
            alert("aca hace mas frio");
            break;
        case urano:
            alert("aca hace mas frio");
            break;
        case neptuno:
            alert("aca hace mas frio");
            break;     
        default:
            alert("no es un planeta valido");        
    }
}

/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
Mercurio.
Venus.
Tierra.
Marte.
Júpiter.
Saturno.
Urano.
Neptuno */