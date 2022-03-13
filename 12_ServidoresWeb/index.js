const express = require("express");

//luego indicamos que queremos generar express en app
//a partir de aqui esta app podrá recibir peticiones. pero primero debemos levantar el servidor y decirle que se mantenga escuchando
const app = express();
const PORT = 3000;

//hay que agregarle la capacidad de escuchar:
//request= req = la peticion del cliente
//response= res = la respuesta al cliente del servidor
app.get("/", (req, res) => {
  res.json({
    message: "Hola mundo desde express",
  });
});

//levantar el servidor y en escucha: listen recibe un puerto y una funcion callback que avisará cuando esté levantado.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
