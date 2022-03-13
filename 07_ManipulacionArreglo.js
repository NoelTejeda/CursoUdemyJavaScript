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
 * some: dentro de un arreglo ayuda a verificar "si al menos 1" de todos los elementos que contienen arreglos cumple con una condicion especifica. si la cumple al menos 1 va a retornar un valor lógico (true or false)

* every: retorna un valor lógico "si todos los elementos" de un arreglo cumple con toda la condición que se le especifique.
* 
*/

//problema: queremos ver todos los numeros pares ó impares en un array
//problema: se también se puede usar si queremos ver las personas que sean mayores de edad.

//some
//var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [1,3,5,7,9];
var resultado = numeros.some((numeros) => numeros % 2 === 0);
console.log(resultado);

//every
var numeros = [2,4,6,8,10];
//var numeros = [1,3,5,7,9];
var resultado = numeros.every((numeros) => numeros % 2 === 0);
console.log(resultado);



/**
 * FIND ----FILTER---  FINDINDEX
 * 
 * find: va a buscar un elemento que coincida con cierta condición dentro de un array y lo va a retornar.; el detalle es que va a mostrar el primero que consiga, es decir, si se quieren buscar 2 valores solo va a arrojar el primero que consiga.
 * 
 * filter: retorna todas las coincidencias
 * 
 * findIndex: va a retornar la posición del elemento en el array
 * 
 */

//supongamos que se requiere buscar un único elemento dentro del array.y se necesita conseguir un id en especifico.  
var clientes =[
    {id: 1, nombre: 'paula'},
    {id: 2, nombre: 'Juana'},
    {id: 3, nombre: 'Melisa'},
    {id: 4, nombre: 'flora'},
    {id: 5, nombre: 'July'},
]

var cliente = clientes.find((cliente) => cliente.id === 1);
console.log(cliente);
console.log(clientes);

//usando filter retorna todas las coincidencias
var clientes =[
    {id: 1, nombre: 'paula'},
    {id: 2, nombre: 'Juana'},
    {id: 3, nombre: 'Melisa'},
    {id: 4, nombre: 'flora'},
    {id: 1, nombre: 'July'},
]

var filter= clientes.filter((cliente) => cliente.id === 1);
console.log(clientes);
console.log(filter);


//usando findIndex
var clientes =[
    {id: 1, nombre: 'paula'},
    {id: 2, nombre: 'Juana'},
    {id: 3, nombre: 'Melisa'},
    {id: 4, nombre: 'flora'},
    {id: 1, nombre: 'July'},
]

var filter= clientes.findIndex((cliente) => cliente.id === 1);
console.log(clientes);
console.log(filter);



/**
 * 
 * INCLUDES
 *determina si en un arreglo existe un elemento en especifico y va a devolver verdadero o falso  
 nota: no recibe una función como parametro sino el valor especifico que lo que se vaya a solicitar
 */

 var mascota = ['gato','perro','caballo'];
 var resultado = mascota.includes('caballo')
 console.log(resultado);
 
 //para buscar caracteres dentro de una cadena:
 console.log('gabriel'.includes('el'));
 
 //utilizando includes con filtering; buscará todos los nombres que tenga "a"
 var buscador = (parametro) => {

     var clientes =[
         {id: 1, nombre: 'paula'},
         {id: 2, nombre: 'Juana'},
         {id: 3, nombre: 'Melisa'},
         {id: 4, nombre: 'flora'},
         {id: 1, nombre: 'July'},
    ]
    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
    
}
console.log(buscador('a'));


/**
 * 
 * JOIN
 * nos une todos los elementos de una arreglo y convertir un string a partir de esa union
 * concatena un arreglo con comas (,) sino se le pasa parametros.
 * en el parametro le podemos indicar si queremos usar una coma, punto, barras, etc. ejemplo:
 */

var elementos = ['aire','fuego','agua']
var resultado = elementos.join('/');
console.log(resultado);

// los join se usan en los casos de que se usen archivos csv, el csv contiene archivos separados con comas y estos se pueden abrir en un excel y como estan separados por comas (,) excel los detecta y los separa por celdas

//----------------------------------------------------------------
//video 34 curso udemy: https://www.udemy.com/course/javascript-desde-cero-con-nodejs/learn/lecture/28930098#overview
//ejemplo haciendo un join a un arreglo con objetos:

var clientes =[
    {id: 1, nombre: 'paula'},
    {id: 2, nombre: 'Juana'},
    {id: 3, nombre: 'Melisa'},
    {id: 4, nombre: 'flora'},
    {id: 1, nombre: 'July'},
]

//console.log(clientes.join()); //no está convirtiendo el objeto en string, usa object object para identificar que lo que se está haciendo join es un objeto; join no puede convertir un array de objetos a un string completo para generar string separados por comas. No lo puede hacer. PERO  podemos ayudarles implementando algunos métodos como map (obtener los datos de cada objeto) y posteriormente hacer un join. ejemplo:

//supongamos que solicitan generar un archivo csv a partir de los datos de los clientes para posteriormente abrirlo en un excel
//NOTE: muy importante averiguar más sobre esto.

//generamos una funcion con nombre csvGenerator
var csvGenerator = (array, separator = ',') => {
    // la variable data son los datos que se generran a partir de los arreglos de objetos,esa data saldrá a partir del array, y al array le hacemos un map. porque queremos modificar cada objeto que nos pasen
    let data =  array.map((element) => Object.values(element).join(separator))
    data.forEach(element => console.log(element))                      
}

csvGenerator(clientes);





/**
 * 
 * CONCAT, SORT, SLICE, SPLICE
 
 * 
 * 
 */

// concat: permite concatenar dos arreglos ejemplo:
//por alguna razón solicitar unir estos dos arreglos, hay que declarar otro array porque concat generará un nuevo array.
var array1 = ['Noel','Juan','Pedro','Raul'];
var array2 = [1,2,3,4];
var array3 = array1.concat(array2);
//var array4 = [array1, array2]; //de esta manera crea un array dentro de otro array.
var array4 = [...array1, ...array2]; //con esta expresión (...) hará lo mismo que concat

console.log(array3);

//----------------------------------------------------------------
// sort: ordena los arreglos pero por el orden ascii averiguar mas de esto.
var array1 = ['Noel','Juan','Pedro','Raul',2,3,4,1,];
console.log(array1.sort());


//----------------------------------------------------------------
//splice:es mutable. remueve o modifica elementos de un array ejemplo:

var nombre = ['Noel','Juan','Pedro','Raul'];
//nombre.splice(0,1); //parametros desde donde hasta donde se va a modificar(desdeDondeVaAmodificar, cuantosValores)
nombre.splice(1,1,'ana') //reemplaza al valor indicado por otro.
console.log(nombre);



//----------------------------------------------------------------
//slice: es inmutable.(no modifica el array raiz) hace una copia con los valores que queramos, no toma el último parametro. ejemplo:
var nombre = ['Noel','Juan','Pedro'];
var resultado= nombre.slice(1,2); //el último valor no es incluyente.
console.log(resultado);
console.log(nombre);
