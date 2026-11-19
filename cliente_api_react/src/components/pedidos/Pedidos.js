import React, { useEffect, useState } from 'react';
import Pedido from './Pedido';

const Pedidos = () => {
    const [pedidos, guardarPedidos] = useState([]);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch("http://localhost:5000/pedidos");
            const datos = await respuesta.json();
            if (Array.isArray(datos)) {
                guardarPedidos(datos);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <h2>Pedidos</h2>
            <ul className="listado-pedidos">
                {pedidos.map(pedido => (
                    <Pedido
                        key={pedido._id}
                        pedido={pedido}
                    />
                ))}
            </ul>
        </>
    );
};

export default Pedidos;