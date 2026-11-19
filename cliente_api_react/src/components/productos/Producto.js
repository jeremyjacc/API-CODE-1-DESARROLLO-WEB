import React from 'react';

const Producto = ({ producto = {} }) => {
    const { _id, nombre, precio, codigo } = producto;

    return (
        <li className="producto">
            <div className="info-producto">
                <p className="nombre">{nombre}</p>
                <p className="precio">Precio: {precio}</p>
                {codigo && <p>Código: {codigo}</p>}
            </div>
            <div className="acciones">
                <a href="#" className="btn btn-azul">
                    <i className="fas fa-pen-alt"></i>
                    Editar Producto
                </a>
                <button type="button" className="btn btn-rojo btn-eliminar">
                    <i className="fas fa-times"></i>
                    Eliminar Producto
                </button>
            </div>
        </li>
    );
};

export default Producto;