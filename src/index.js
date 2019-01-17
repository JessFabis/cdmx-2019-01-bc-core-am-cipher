/*estoy llamando los 2 prmeros botones de la seccion 1 de mi index html----------------------*/ 
const iniciar = document.getElementById('empezar');
const Guia = document.getElementById('guia ');

/*llamando a mis botones  de la seccion 2 de mi  index html-----------------------------------*/

const cifrar = document.getElementById('codificar');
const Decodificar=document.getElementById("decodificar");
const regresar= document.getElementById('volver');
const Limpiar= document.getElementById('limpiar ');

/*llamando a mis botones  de la seccion 3 de mi  index html----------------------------------------*/

const Volver2= document.getElementById('volver2');


/*Cuando hace click de empezar oculta la pagina 1 -----------------------------------------------------------------------------*/

iniciar.addEventListener("click",() =>{
	pagina1.classList.add("ocultar");
	pagina2.classList.remove("ocultar");
});

cifrar.addEventListener("click",() =>{
	pagina2.classList.add("ocultar");
	pagina3.classList.remove("ocultar");
});

regresar.addEventListener("click",() =>{
	pagina3.classList.add("ocultar");
	pagina2.classList.remove("ocultar");
});















