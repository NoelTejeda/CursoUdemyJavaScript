/**
 * Estructura if
 * if (condicion){
 *  
 * }

*/

var llueve = false;
if (llueve) {
    console.log('Necesito un paraguas');
}else {
    console.log('No está lloviendo');
}

//----------------------------------------------------------------
var administrador = 'administrador'
if (administrador === 'administrador') {
    console.log('Bienvenido');
}

//----------------------------------------------------------------

const MAYORIA_DE_EDAD=18;
var edadPersona=12;
if (edadPersona>MAYORIA_DE_EDAD) {
    console.log('La persona es mayor de edad');
}else {
    console.log('Usted es menor de edad');
}

//---------------------------------------------------------
var semaforo = 'purpura';
if (semaforo === 'verde') {
    console.log('Muevete!');
}else if(semaforo === 'amarillo'){
    console.log('Atento');
}else if(semaforo === 'rojo'){
    console.log('Detente');
}else{
    console.log('el color es incorrecto');
}


/**
 * 
 * Estructura switch
 * 
 */


var producto = ''
switch (producto) {
    case 'lechoza':
        console.log('la lechoza Cuesta 5 bs');
        break;
    case 'Naranja':
        console.log('la naranja Cuesta 1 bs');
        break;
    case 'limon':
        console.log('el limon cuesta 3 bs');
        break;
    default:
        console.log('No disponemos de esa fruta');
}