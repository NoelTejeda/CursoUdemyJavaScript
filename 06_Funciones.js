/**
 * las funciones son un conjuntos de sentencias que se pueden utilizar para realizar ciertas acciones especificas dentro de los programas
 */


//las funciones al igual que las◘☻ variables pueden ser guardadas en memoria como un valor





/**
 * formas para escribir funciones:
 * 
 * 1) declarativas
 * function nombreDeLaFuncion(){
 *      cuerpodelafuncion
 * }
 * 
 */


function saludar(){
    console.log('Hola Noel!');
}

saludar();

//------------------------------------------    
// a las funciones se le pueden pasar valores como parametros para que puedan ser usados dentro del cuerpo de la funcion


function saludar(nombre){
    console.log(`hola soy ${nombre}`);
}
saludar('noel')

//------------------------------------------    

//cuando quieres que una funcion devuelva algún valor utilizamos la palabra reservada return

function saludar(nombre){
    //return 'hola soy ${Noel}'
    return `hola soy ${nombre}`
}
//para que nos retorne debemos almacenarlo en una variable y posteriormente utilizarlo.
var saludo = saludar('noel')
console.log(saludo);
//console.log puede imprimir cualquier tipo de valor, asi que utilizamos la funcion saludar y le pasamos nuevos parametros ejm:
console.log(saludar('noel tejeda'));

//--------------------------------------------






/**
 * 
 * SEGUNDA FORMA PARA DECLARAR FUNCIONES
 * 
 * funciones de expresion ó anonimas
 * clase 24 Udemy
*/

var suma = function(a,b){
//la funcion como no tiene nombre también se le conoce como funciones anonimas.entre parentesis le paso dos parametros a,b
    return a+b;
}
//suma(2,2) si solo llamo la funcion no retornará ya que no se ha almacenado ese retorno en ningún lago.
console.log(suma(2,2));



/**
 * 
 * arrow function ó funcion flecha
 * sintaxis ejemplo: 
 * var restar = () => {}
 * 
 */

var restar = (a,b) => {
    return a-b;
}
console.log(restar(4,2))


var multiplicar = (a,b) => a*b;
console.log(multiplicar(2,2)); 

