const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapis")
    .then(() => console.log("Conexión exitosa a mongoDB"))
    .catch(error => console.log("Error en la conexión:" + error));

// crear y levantar el servidor
const app = express();

// ESTO Habilita CORS para permitir peticiones desde el navegador (Fetch API)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Servir archivos estáticos del frontend
app.use(express.static("cliente"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes());

app.listen(5000, () => {
    console.log("Servidor corriendo en el puerto 5000");
});
