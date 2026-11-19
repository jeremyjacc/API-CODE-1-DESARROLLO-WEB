import React, { useEffect, useState } from 'react';
import Producto from './Producto';

const Productos = () => {
    const [productos, guardarProductos] = useState([]);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch("http://localhost:5000/productos");
            const datos = await respuesta.json();
            if (Array.isArray(datos)) {
                guardarProductos(datos);
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
            <h2>Productos</h2>
            <ul className="listado-productos">
                {productos.map(producto => (
                    <Producto
                        key={producto._id}
                        producto={producto}
                    />
                ))}
            </ul>
        </>
    );
};

export default Productos;