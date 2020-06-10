const mongoose = require ('mongoose');


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {console.log('conectado a la BD');})
.catch((err) => {console.log('error al conectarme');})