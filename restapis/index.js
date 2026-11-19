const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
// conectar a MongoDB
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/restapis")
    .then(() => console.log("Conexión exitosa a mongoDB"))
    .catch(error => console.log("Error en la conexión:" + error))
//crear y levantar el servidor
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use("/", routes())
app.listen(5000, () => {
    console.log("Servidor corriendo en el puerto 5000")
})