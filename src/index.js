/* estoy creando variable y metiendo mis paginas*/

const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');
const pagina3 = document.getElementById('pagina3');

/*estoy llamando los 2 prmeros botones de la seccion 1 de mi index html----------------------*/
const iniciar = document.getElementById("empezar");
//const Guia = document.getElementById("guia");
/*llamando a mis botones  de la seccion 2 de mi  index html-----------------------------------*/

const cifrar = document.getElementById("codificar");
const descifrar = document.getElementById("decodificar");
const volver= document.getElementById("volver");
//const Limpiar= document.getElementById("limpiar");

/*llamando a mis botones  de la seccion 3 de mi  index html----------------------------------------*/
const Volver2= document.getElementById("volver2");


/*input donde se guarda el mensaje y el offset */
const mensaje = document.getElementById("mensaje");

let offset = document.getElementById("opcion");


const limpiar =   () =>{
  mensaje.value = "";

  offset.value= "";


}



iniciar.addEventListener("click", () => {
  pagina1.classList.add("ocultar");
  pagina2.classList.remove("ocultar");
});

/* me falta el evento de boton de guia*/

cifrar.addEventListener("click", () => {
  let offsetnum = offset.value;
  let usuario = mensaje.value;
  pagina2.classList.add("ocultar");
  pagina3.classList.remove("ocultar");
  
  let resultadoFinal = window.cipher.encode(offsetnum, usuario);
  document.getElementById("boxResult").innerHTML = resultadoFinal;

  limpiar();
});
descifrar.addEventListener("click", () => {
  let offsetnum = offset.value;
  let usuario = mensaje.value;
  pagina2.classList.add("ocultar");
  pagina3.classList.remove("ocultar");

  let resultadoFinal2 = window.cipher.decode(offsetnum, usuario);
  document.getElementById("boxResult2").innerHTML = resultadoFinal2;

  limpiar();
});

volver.addEventListener("click",() =>{
  
	pagina2.classList.add("ocultar");
  pagina1.classList.remove("ocultar");
  limpiar();
});

Volver2.addEventListener("click",() =>{
  
	pagina3.classList.add("ocultar");
  pagina2.classList.remove("ocultar");
  limpiar();
});

