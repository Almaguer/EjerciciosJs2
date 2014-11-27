var num= Number(prompt("Dame un numero"));

function tablaUno(numero){
	var cont=0;
	while(cont<10){
		cont++;

		document.write(cont+ "*" +numero + "=" + (cont*numero));
	}
}