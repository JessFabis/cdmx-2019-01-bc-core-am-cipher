
 const mensaje = document.getElementById ("mensaje");
 const codificar = document.getElementById ("enviar");
 const offset = parseInt(document.getElementById("opcion").value);
 let nuevoCifrado="";
 codificar.addEventListener("click",window.cipher);


window.cipher = {


  /*Estamos obteniendo el codigo ascci y se convierte en mayusculas*/

  
  	let mensajeObtenido=mensaje.value;
  	let mayuscula= mensajeObtenido.toUpperCase();
  	let mayus= mayuscula.charCodeAt();


  	for (let i = 0; i<mayuscula.length; i++) {
  		let letraAscii=mayuscula.charCodeAt(i);
  		let formula=(letraAscii+65-offset)%26+65;
  		let resultado=String.fromCharCode(formula);
  		nuevoCifrado+=resultado;
  	}
	  alert(nuevoCifrado);


};


