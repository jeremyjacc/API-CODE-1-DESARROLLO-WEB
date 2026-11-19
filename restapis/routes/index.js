const express = require('express');
const Clientes = require("../models/Clientes");
const Productos = require('../models/Productos');
const cliente_controlador = require('../controladores/cliente_controlador');
const pedido_controlador = require('../controladores/pedido_controlador');
const router = express.Router();
module.exports = function () {

    router.get("/clientes", cliente_controlador.mostrar_clientes);
    router.post("/clientes", cliente_controlador.nuevo_cliente);
    router.put("/clientes/:idCliente", cliente_controlador.actualizar_cliente);
    router.get("/productos", async (request, response) => {

        //response.send("productos de la página")
        try {
            const productos = await Productos.find({})
            response.json(productos)

        } catch (error) {
            console.log("error", error)
        }

    })

    // Rutas de Pedidos
    router.post("/pedidos", pedido_controlador.nuevo_pedido);
    router.get("/pedidos", pedido_controlador.mostrar_pedidos);

    return router

}