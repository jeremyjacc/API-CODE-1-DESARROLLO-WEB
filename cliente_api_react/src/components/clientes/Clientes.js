import React from "react";

const Cliente = () => {
    return (
        <li className="cliente">
            <div className="info-cliente">
                <p className="nombre">Juan Pablo De la torre Valdez</p>
                <p className="empresa">Udemy</p>
                <p>correo@correo.com</p>
                <p>Tel: 209109310</p>
            </div>
            <div className="acciones">
                <a href="#" className="btn btn-azul">
                    <i className="fas fa-pen-alt"></i>
                    Editar Cliente
                </a>
                <button type="button" className="btn btn-rojo btn-eliminar">
                    <i className="fas fa-times"></i>
                    Eliminar Cliente
                </button>
            </div>
        </li>
    );
};

export default Cliente;
