
 const Mensaje = document.getElementById ("mensaje");
 const codificar = document.getElementById ("codificar");
 let offset = parseInt(document.getElementById("opcion").value);
 let offsetnum = Number(offset);
 let nuevoCifrado="";
 codificar.addEventListener("click",window.cipher);


window.cipher = {


  /*Estamos obteniendo el codigo ascci y se convierte en mayusculas*/

  
  	let mensajeObtenido=mensaje.value;
  	let mayuscula= mensajeObtenido.toUpperCase();
  	


  	for (let i = 0; i<mayuscula.length; i++) {
		  let letraAscii=mayuscula.charCodeAt(i);
		  console.log(letraAscii);
		  let formula=(letraAscii-65+offsetnum)%26+65;
		  console.log(formula);
  		let resultado=String.fromCharCode(formula);
  		nuevoCifrado+=resultado;
  	}
	  alert(nuevoCifrado);


};


