

let nuevoCifrado = ""; /*la tenia afuera*/
let nuevoCifrado2 = ""; /*la tenia afuera*/
window.cipher = {
  encode: (offsetnum, usuario) => {
	

    let offsetNueva = parseInt(offsetnum);
    /*Estamos obteniendo el codigo ascci y se convierte en mayusculas*/
    let mayuscula = usuario.toUpperCase();
    for (let i = 0; i < mayuscula.length; i++) {
      let letraAscii = mayuscula.charCodeAt(i);
      /*console.log(letraAscii);*/

      let formula = (letraAscii - 65 + offsetNueva) % 26 + 65;

      let resultado = String.fromCharCode(formula);
      nuevoCifrado += resultado;
    }
    return (nuevoCifrado);
    /*console.log(nuevoCifrado);*/
  },

  decode: (offsetnum, usuario) => {
	let offsetNueva2 = parseInt(offsetnum);
	let mayuscula = usuario.toUpperCase();
	for (let i=0;i< mayuscula.length; i++){
		let letraAscii =mayuscula.charCodeAt(i);
		
		let formula =(letraAscii +65-offsetNueva)%26 +65;
		let resultado = String.fromCharCode(formula);
		nuevoCifrado2 +=resultado;
	}




    return (nuevoCifrado);
  }





};
