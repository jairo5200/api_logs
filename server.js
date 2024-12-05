const express = require('express');
const app = express();
const {config} = require('./config/config');
const routerApi = require('./routes');

// creamos la constante port con el valor dado en el .env en caso de no haber se elige el 3002 por defecto
const port = config.port || 3002;

// le decimos a la api que vamos a usar formato json
app.use(express.json());

routerApi(app);

// hacemos que nuestra api escuche por el puerto definido
app.listen(port);
// mostramos en consola por que puerto esta escuchando la api
console.log(` server listen on port: ${port}`);


