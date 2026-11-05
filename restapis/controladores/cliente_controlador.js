const Clientes = require("../models/Clientes.js")
exports.mostrar_clientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({})
        res.json(clientes)
    } catch (error) {
        console.log("error", error)
        next()
    }
}
exports.nuevo_cliente = async (req, res, next) => {
    const cliente = new
        Clientes(req.body);
    try {
        await cliente.save();
        res.json({ mensaje: "Cliente agregado correctamente" });

    } catch (error) {
        console.log("error", error);
        next();
    }
}

exports.actualizar_cliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({ _id: req.params.idCliente },
            req.body, { new: true }
        )
        res.json(cliente)
    } catch (err) {
        res.send(err)
        next()
    }
}