

let nuevoCifrado = "";
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
    return offsetnum, usuario
  }





};
