"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/
const primerboton  =  document.querySelector("#boton1");
const segundoboton =  document.querySelector("#boton2"); 
const tercerboton  =  document.querySelector("#boton3"); 
/* document.textContent tituloprincipal.textContent = ` Publica tus contenidos : Aca se te muestra fecha, hora y minutos :${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`; */
/* document.write(primerboton); */
console.log(primerboton);
console.log(segundoboton);
console.log(tercerboton);

primerboton.textContent=' CORTAR ';
segundoboton.textContent=' COPIAR ';
tercerboton.textContent=' PEGAR ';

/* const primerboton2 = document.querySelector(".btn");
console.log(primerboton2);
Document.write(primerboton2.textContent+' ::: ');

/* primerboton2.classList.remove("closed"); */
// Agregamos la clase de abierto
/* primerboton2.classList.add("agua");
primerboton2.className='AGUA';  */ 
const buttonpower = document.querySelectorAll (".btn");
alert(' : '+buttonpower[0].textContent);
alert(' : '+buttonpower[1].textContent);
alert(' : '+buttonpower[2].textContent);
buttonpower[0].classList.add('agua');

/*  buttonpower[1].classList.add('agua'); */
buttonpower[2].classList.add('agua');







/* document.write(segundoboton); 
console.log(segundoboton);
segundoboton.textContent = 'COPIAR';
tercerboton.textContent = 'PEGAR'; */


