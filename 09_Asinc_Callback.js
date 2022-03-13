/** 
 * Asincronismo Callback
 * https://www.udemy.com/course/javascript-desde-cero-con-nodejs/learn/lecture/28930110#overview
 * video 37 curso Udemy
*/

// verificamos una suma, pero si queremos que se detenga para que ejecute otro proceso utilizamos "CALLBACK" que siempre se abreviará con cb.
/**const suma =(a,b) => {
    return a+b;
}
var resultado = suma(1,2);
console.log(resultado);*/

//----------------------------------------------------------------
const suma =(a,b,cb) => {
    cb(a+b);
}
suma(1,2,(resultado)=>{
    console.log(resultado);
}); 


// callback era la forma de gestionar las formas asincronas; pero esta manera ya no se usa, ahora se usan lo que se llaman "promesas"