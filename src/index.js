/*estoy llamando los 2 prmeros botones de la seccion 1 de mi index html----------------------*/ 
const Empezar = document.getElementById('empezar');
const Guia = document.getElementById('guia ')

/*llamando a mis botones  de la seccion 2 de mi  index html-----------------------------------*/

const Codificar = document.getElementById('codificar');
const Decodificar=document.getElementById("decodificar");
  /*stos botones igual estan comentados en el html
const Volver= document.getElementById('volver');
const Limpiar= document.getElementById('limpiar ');*/

/*llamando a mis botones  de la seccion 3 de mi  index html----------------------------------------*/

const Volver2= document.getElementById('volver2');


/*Haciendo la logica -----------------------------------------------------------------------------*/

Empezar.addEventListener("click",()=>{
	pagina1.classList.add("ocultar");
	pagina2.classList.add("ocultar");
});

/*

codificar.addEventListener("click",()=>{
	bienvenida.classList.add("ocultar");
	boxcode.classList.remove("ocultar");
});

decodificar.addEventListener("click",()=>{
	bienvenida.classList.add("ocultar");
	boxcode.classList.remove("ocultar");
});