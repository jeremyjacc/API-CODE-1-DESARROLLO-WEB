const Pedidos = require('../models/Pedidos');

// Crear un nuevo pedido
exports.nuevo_pedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({ mensaje: 'Se agregó un nuevo pedido' });
    } catch (error) {
        console.log(error);
        next();
    }
};

// Mostrar todos los pedidos (con los datos del cliente y los productos populados)
exports.mostrar_pedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({})
            .populate('cliente')
            .populate({
                path: 'pedido.producto',
                model: 'Productos'
            });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
};