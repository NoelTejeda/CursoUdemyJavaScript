/**
 * 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
    El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

//if

var dia = "martes";
if (dia === "lunes") {
  console.log("hoy es lunes");
} else if (dia === "martes") {
  console.log("hoy es martes");
} else if (dia === "miercoles") {
  console.log("hoy es miercoles");
} else if (dia === "jueves") {
  console.log("hoy es jueves");
} else if (dia === "viernes") {
  console.log("hoy es viernes");
} else if (dia === "sabado") {
  console.log("hoy es sabado");
} else if (dia === "domingo") {
  console.log("hoy es domingo");
}

//switch

var dia = "sabado";
switch (dia) {
  case "lunes":
    console.log("hoy es lunes");
  case "martes":
    console.log("hoy es martes");
    break;
  case "miercoles":
    console.log("hoy es miercoles");
    break;
  case "jueves":
    console.log("hoy es jueves");
    break;
  case "viernes":
    console.log("hoy es viernes");
    break;
  case "sabado":
    console.log("hoy es sabado");
    break;
  case "domingo":
    console.log("hoy es domingo");
    break;
}

//----------------------------------------

/**
 * 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
    Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
    Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
    Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
    Si la compra supera los $50 el gasto de envío será gratuito
    El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */


//if

var compra = 25 ;

if (compra <= 10){
    console.log('la compra le sale en: ', compra+3);
}else if(compra<=20 && compra>=10){
    console.log('la compra le sale en: ', compra+5);
}else if(compra<=50 && compra>20){
    console.log('la compra le sale en: ', compra+7);
}else if(compra>50){
    console.log('la compra no tiene costos por envío');
}


//switch

var compra = 9;

switch (compra) {
    
    case compra <= 10:
        console.log('la compra le sale en: ', compra+3);
        break;

    default:
        console.log('verifica el monto');
}