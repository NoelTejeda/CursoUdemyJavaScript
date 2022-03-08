/**
 * Ciclos
 */

//while (evalua primero y despues ejecuta)

var contador=0;
while (contador <= 100){
    console.log("Hola mundo!!");
    contador+=5;
}


//dowhile (ejecuta primero y después evalua)
var contador = 1;   
do {
    console.log("Hola mundo!!")
    contador+=1
} while (contador<=8);


/**
 * for(expresionInicial; Expresioncondicional; ExpresiondeActualizacion){
 *  las instruciones
 * }
*/
for (let contador = 0; contador < 5; contador+=2) {
    console.log('Hola mundo de nuevo!');    
}

for (let i = 0; i < 5; i++) {
    console.log('Hola mundo de nuevo!');    
}


/**
 * for ...in (itera sobre un bojeto que está codificado por cadenas)
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in
 * 
 * for(variable ; operadorIN ; objeto){
 *  instrucciones
 * }
 * 
 * Nota: los objetos tienen propiedas y estan conformadas por: (clave:valor)
 * Nota: el operador in va a retornar un valor booleano si la clave se encuentra en el objeto
 */

var persona = {   //objeto
    nombre:'Noel',
    apellido:'Tejeda',
    edad:40
}

for (let clave in persona) {
    console.log(clave,persona[clave]);
}

/**
 *  for of 
 *  for (variable; operadorOF; arreglo) 
 * ejecuta un bloque de código para cada elemnento de un objeto iterable como: string,array; si intento recorrer un objeto me indica que no es iterable.
 * 
 */

/**var persona = {   //objeto no es iterable
    nombre:'Noel',
    apellido:'Tejeda',
    edad:40
}
*/
var arreglo = [1,2,3,4,5,] //array
var nombre = 'Noel'        //string
for (let valor of nombre) {
    console.log(valor);
}