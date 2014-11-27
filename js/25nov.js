/*function login(user,pass){
	var arreglo= ["devf","1111"];

	if(user==arreglo[0] && pass==arreglo[1]){
		document.write("bienvenido");
	}
		else document.write("vete");
}

login("devf","1112");


function miSuma(arreglo){
	var suma=0;

	for(i=0; i<arreglo.length; i++){
		suma=suma + arreglo[i];
	}
	return suma;
}

var edad= prompt("Dame tu edad");
var arreglo= [1,3,5,7,9];

document.write(miSuma(arreglo)+ +edad);


function invierteNombre(nombre){
	var usuario="";


	for(i=nombre.length-1; i>=0; i--){
		usuario= usuario+nombre[i];
	}
	return usuario;
}

var nombre= prompt("dame tu nombre");
alert(invierteNombre(nombre));

*/
function palindromo(nombre){
	var cierto= "cierto";
	var sube=0;


	for(i=nombre.length-1; i>=0; i--){
		if (nombre[i]==nombre[sube])
			sube++;

			else {
				cierto="falso";
				break;
			}
	}
	return cierto;
}

var nombre= prompt("dame tu nombre");
var res= palindromo(nombre);
alert(res);



