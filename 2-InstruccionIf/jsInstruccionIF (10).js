function mostrar()
{ {
    //Genero el número RANDOM entre 1 y 10 
    var max;
    var min;
    var nota;

    max = 11
    min = 1

    nota = Math.floor(Math.random() * (max - min))+ min;

    if(nota == 10 || nota == 9) {
        alert(nota + "-Excelente")
        } else if(nota >4){
        alert(nota + "-Aprobo");
        } else {
            alert(nota + "-Vamos, la proxima se puede ");
    }

}
}//FIN DE LA FUNCIÓ