/**
 * 3 formas de definir Variables
 *
 * palabras reservadas:
 * var
 * let
 * const
 */

//variables con var
var nombre = "Noel Tejeda";
console.log(nombre);

var edad = 29;
console.log(edad);
//------------------------------------------------------------------
var persona = {
  nombre: "Noel",
  apellido: "Tejeda",
  edad: 40,
  direccion: { calle: "la pastora", numerodecasa: 8 },
  ciudadesVisitadas: ['Guayaquil', 'Guarenas','Carabobo']
};
console.log(persona);
//--------------------------------------------------------------------

//variable con let: funciona solo dentro del bloque de código

{
    let nombre= 'Hola Noel';
    console.log(nombre);
}

//-------------------------------
//la diferencia entre let solo es reconocido dentro del bloque, y var es genereal


//variable const (constante) se debe colocar el mayúscula la variable, ejemplo:

const NUMERO_PI= 3.14
console.log(NUMERO_PI);