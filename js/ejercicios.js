// Escribe una función que reciba un argumento el cual será un número. 
// La función imprimirá un mensaje en un alert que dirá si el número es positivo o es negativo

/*
var estado = "positivo";
function posNeg(num){
	if (num <0){
	estado= "negativo";
	}
	return estado;
	
}

alert(posNeg(-2));


var cajita = prompt("Da tu nombre"); // prompt es el mensaje que te mandan para que escribas
									 // cajita es la variable que guarda lo que te escribieron

function tocasLaBateria(nombreUsuario){
 	var usuario = "no tocas la bateria"

 	if(nombreUsuario.charAt(0)=='b'|| nombreUsuario.charAt(0)=='B'){
 		usuario = "sí tocas la bateria";
 	}
 	return usuario;
}
	alert(tocasLaBateria(cajita));



//La función recibirá un número y regresará su equivalente en letra:

var numeroLetra = 'Z';
var numUsuario = prompt("Dame un número");

function convierteRango(numero){
	if (numero>= .9 && numero <1){
		numeroLetra = 'A';
	}	else if (numero>= 0.8 && numero <0.9){
			numeroLetra= 'B';		
		}   else if (numero>= 0.7 && numero <0.8){
			numeroLetra= 'C';
			}   else if (numero>= 0.6 && numero <0.7){
				numeroLetra= 'D';
				} else if(numero> 1 || numero <6){
					numeroLetra= 'F';
				}
	return numeroLetra;
		}

alert(convierteRango(numUsuario));


La función recibirá un número que será el año y true si es bisiesto y false si no lo es.

1.- Un año es bisiesto si es divisible entre 4 pero no es divisible entre 100.
2.- Sin embargo un año es bisiesto si es divisible entre 100 y también divisible entre 400



var anioUsuario = prompt("escribe el año");

function esBisiesto(anio){
	var anioBisiesto = "false";
	if(anio%4==0 && anio%100!==0){
		anioBisiesto= "true";}
		else if(anio%100==0 && anio%400==0){
			anioBisiesto="true";
		}
	return anioBisiesto;
}

alert(esBisiesto(anioUsuario));

*/

function tablas(){
	var renglon = 1;
	var columna = 1;
	var tablita="";


	for (var i=1; i<11; i++){
		tablita+= i.toString();
		tablita+= " "; 
		for (var j=2; j<10; j++){
			tablita+= (i*j).toString();
			tablita+= " ";
		}
	tablita= tablita+ "<br>";
	}
		document.write(tablita);
}

tablas();