/**
 * ForEach
 */

//para recorrer un array 

var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras.length);
//letras.length devuelve la cantidad de letras del arreglo 

for (let i = 0 ; i < letras.length ; i++) {
    const element = letras[i];
    console.log(element);
}


//---------
var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
letras.forEach((elemento) => {
    console.log(elemento);
})

//---------

//se puede abreviar así:
var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
letras.forEach((elemento) => console.log(elemento));


//for each permite recorrer los elementos de in arreglo


/**
 * las otras manipulaciones de array son:
 * push ; shift ; pop
 * 
*/


//con push podemos agregar al array
var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
letras.push() //funciones mutables
console.log(letras);


//con shift podemos obtener el primer elemento de una arreglo o array. (otra funcion mutable)

var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
letras.push() //funciones mutables
console.log(letras);
//el resultado es que elimina el primer elemento pero si quiero que lo muestre hay que guardarlo en una varible:
var primerElemento= letras.shift() //funciones mutables
console.log(primerElemento);
console.log(letras);


//con la funcion pop obtiene el último elemento y elimina el elemento
var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
letras.pop();
console.log(letras);
//para retornarlo:
var ultimoelemento = letras.pop();
console.log(ultimoelemento);
console.log(letras);



/**
 * MANIPULACION MAP:
 *  es uno de los más útiles dentro de la manipulación de arreglos (array). pero no es mutable; es decir; es inmutable.
 * 
 * transforma un arreglo pero no modifica el origen
 */ 

var estudiante = ['Noel', 'Marianyela', 'Isabela', 'Yanireth'];

var asistencia = estudiante.map((nombre) =>{
    return{
        nombre:nombre,
        asistencia: true 
    }
} )
console.log(estudiante);
console.log(asistencia);




/**
 * FILTER
 * es inmutable
 * ayuda a filtrar elementos de un arreglo, en base a una condición que ayuda a devolver un valor lógico y retorna un nuevo arreglo.
 * 
 * se aconseja mejor hacer las consultas en la Bd que hacer la consulta por este filtrado.
 */

//se solicita de la siguiente lista los estudiantes mayores ó igual a 21 año.
var estudiante = [
    {nombre: 'Noel', edad: 19, matriculado: true},
    {nombre: 'Ana', edad: 18, matriculado: false},
    {nombre: 'Raul', edad: 23, matriculado: true},
    {nombre: 'Javi', edad: 25, matriculado: false},
]

var filtrado = estudiante.filter((estudiante) => estudiante.edad >= 21 && estudiante.matriculado);

console.log(estudiante);
console.log(filtrado);



/**
 * 
 * REDUCE
 * es inmutable
 * reduce toda una array a un solo valor que puede ser booleano, string, numerico, arreglo, objeto.
 * 
 */

//se solicita el promedio de un estudiante ejm:
var calificaciones = [3,5,6,10,9];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);

console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);


/**
 * SOME ---  EVERY
 * 
 * some: dentro de un arreglo ayuda a verificar si al menos 1 de todos los elementos que contienen arreglos cumple con una condicion especifica. si la cumple al menos 1 va a retornar un valor lógico (true or false)

* every: retorna un valor lógico si todos los elementos de un arreglo cumple con toda la condición que se le especifique.
* 
*/