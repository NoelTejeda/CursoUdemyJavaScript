//Desarrollo de cliente que le hará una peticion al servidor rickandmortyapi

//para hacer el llamado (require) del paquete realizamos el llamado con una varialble constante y dentro de la función el paquete a usar:
const axios = require("axios");

//genereacion de la funcion que va a ser el proceso principal, es la funcion que se va a generar cada vez que alguien ejecute index.js
const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;

  let character = results.map((character) => {
    return {
      id: character.id,
      name: character.name,
    };
  });
  console.log(character);
};

main();

/**axios es un paquete asincrono, va a hacer las peticiones al servidor de forma asincrona; entonces para trabajar con axios debemos decirle que a la función de main, le agregamos la palabra reservada "async" y dentro de la funcion resolvemos las promesas con await
 *
 *
 * axios al ser asincrono nos devuelve promesas y nosotros debemos resolver esas promesas con await
 * axios expone metedos http para realizar la petición (axios.get para solicitar datos al servidor) get es una funcion que dentro recibe como parametros la url a al cual haremos la peticion.
 *
 * axios nos va a traer la respuesta del servidor de vuelta, esta respuesta la almacenamos en una variable y le llamamos let response=
 *
 * para realizar la peticion la hacemos desde la consola con: node index.js (con esto nos trae toda la respuesta del servidor)
 *
 * como quiero desestructurar toda esa informacion y me arroje algo en especifico uso: (solo quiero la data)
 * let {data} = (response);
 *
 * let {data:{results}} = (response); se puede hacer una desestruturacion mayor de esta manera para que traiga el contenido de results.
 * el resultado sera un arreglo con objetos.
 *
 *
 * ahora si solo quiero el id y el nombre de los personajes usamos map:
 *  creo una variable, utilizo map, y que retorne solo el id y nombre.
 *
 *
 */

//  https://www.udemy.com/course/javascript-desde-cero-con-nodejs/learn/lecture/28930164#questions
//  video 42
