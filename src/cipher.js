window.cipher = {
  encode: (offsetnum, usuario) => {

    let nuevoCifrado = ""; /*la tenia afuera*/

    let offsetNueva = parseInt(offsetnum);
    /* parseInt es para que sea un entero

       /*Estamos obteniendo el codigo ascci y se convierte en mayusculas*/
    /*let mayuscula = usuario.toUpperCase();*/

    for (let i = 0; i < usuario.length; i++) {
      let letraAscii = usuario.charCodeAt(i); // charCodeAt es para conocer el indice Ascci de un caracter "esta convirtiendo de letra a num"
      /*console.log(letraAscii);*/

      /*parte de hackeredition , reconoce las minusculas*/
      if (letraAscii >= 97 && letraAscii <= 122) {
        let formula = (letraAscii - 97 + offsetNueva) % 26 + 97;
        let resultado = String.fromCharCode(formula);
        nuevoCifrado += resultado;

        /*letras mayusculas*/

      } else if (letraAscii >= 65 && letraAscii <= 90) {
        let formula = (letraAscii - 65 + offsetNueva) % 26 + 65;
        let resultado = String.fromCharCode(formula);
        nuevoCifrado += resultado;

      } else {
        let resultado = String.fromCharCode(letraAscii);
        nuevoCifrado += resultado;

      }
    }
    return (nuevoCifrado);
    /*console.log(nuevoCifrado);*/
  },

  decode: (offsetnum, usuario) => {
    let nuevoCifrado2 = ""; /*la tenia afuera*/
    let offsetNueva2 = parseInt(offsetnum);




    for (let i = 0; i < usuario.length; i++) {
      let letraAscii = usuario.charCodeAt(i);
      /*console.log(letraAscii);*/

      if (letraAscii >= 65 && letraAscii <= 90) {
        let formula = (letraAscii + 65 - offsetNueva2) % 26 + 65;
        let resultado2 = String.fromCharCode(formula);
        nuevoCifrado2 += resultado2;

      } else if (letraAscii >= 97 && letraAscii <= 122) {
        let formula = (letraAscii - 122 - offsetNueva2) % 26 + 122; /*necesito explicacion */
        let resultado2 = String.fromCharCode(formula);
        nuevoCifrado2 += resultado2;
      } else {
        let resultado2 = String.fromCharCode(letraAscii);
        nuevoCifrado2 += resultado2;
      }


    }
    return (nuevoCifrado2);
    /*console.log(nuevoCifrado);*/
  }

};
