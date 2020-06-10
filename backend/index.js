require('dotenv').config(); //manejo de información sensible y manejo de variables de entorno
const { server, PORT } = require('./server/index.js'); //"destructuring"
require('./database');

//servidor encendido
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
