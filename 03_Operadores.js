/** operadores de asignacion */

var x=2;

//operador de adiccion (+=)
//------------------
var x=3;
var y=2;
x+=y; //x=x+y
console.log(x);

//-----------------
//operador de resta (-=)
var x=3;
var y=2;
x-=y; //x=x-y
console.log(x);

//operador de multiplicacion (*=)
var x=3;
var y=2;
x*=y; //x=x*y
console.log(x);

//operador de division (/=)
var x=2;
var y=3;
x/=y; //x=x/y
console.log(x);

//operador de residuo (%=)
var x=2;
var y=3;
x%=y; //x=x/y
console.log(x);

//operador de exponenciacion (**=)
var x=2;
var y=3;
x**=y; //x=x**y
console.log(x);

//operador de no es igual (!=)
console.log(4!=3);

//operador de igual (==)
console.log(3==3);
console.log(3=="3");

//operador estrictamente igual (===)
console.log(4===3);
console.log(3==="3");

//operador desigualdad estrita (!==)
console.log(3!=="3");
console.log(3!==3);

//operadores <,>,=<,=>
console.log(3>"3");
console.log(3<"3");

//operador de concatenacion o cadena (+)
var nombre= 'Noel';
var apellido= 'Tejeda';
var nombrescompletos= nombre +' '+ apellido;
console.log(nombrescompletos);

//operador condicional o ternario (condicion ? val1 : val2)
console.log(2 > 3 ? 'es mayor' : 'es menor');
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

//---------------------------------------------------------------------
//operador de desestructuracion
var persona = {
    nombre : 'Noel',
    apellido: 'Tejeda'
}

//desestructura el objeto persona para sacar el nombre
var{nombre}=persona;
console.log(nombre);
console.log(persona);
//---------------------------------------------------------------------

//desestructuracion de arreglos:

var arreglo = [1,2,3,4,5,6,7,8,9]
var [PrimeraPosicion,dos]=arreglo;
console.log(PrimeraPosicion);
console.log(dos);

//---------Operador de miembro o acceso de propiedad------------------------

var persona = {
    nombre : 'Noel',
    apellido: 'Tejeda'
}
console.log(persona.nombre); //con el punto accedemos a la propiedad de un objeto



//---------Notacion por corchete ------------------------

var persona = {
    nombre : 'Noel',
    apellido: 'Tejeda'
}
console.log(persona['apellido']); //parecido al acceso con punto, pero ahora corchete, también se puede usar en un arreglo ejemplo:

//---------Notacion por corchete en un arreglo---------------------

var arreglo = [1,2,3,4,5,6,7,8,9]
console.log(arreglo[0,1]); //BUG: averiguar como tomar dos valores del array ya que los suma (arreglo[0,1])


//---------Operacion de determinacion de tipo (typeof)---------------------
console.log(typeof 'Noel');  //arroja el tipo de dato
console.log(typeof 40);  
console.log(typeof 20.0);  

