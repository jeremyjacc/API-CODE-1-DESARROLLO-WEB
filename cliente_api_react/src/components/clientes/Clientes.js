import React, { useEffect, useState } from "react";
import Cliente from "./Cliente";
const Clientes = () => {
    const [clientes, guardarClientes] = useState([])
    const consultar_api = async () => {
        try {
            const respuesta = await fetch("http://localhost:5000/clientes")
            const datos = await respuesta.json()
            console.log(datos);
            guardarClientes(datos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        consultar_api()
    }, [])

    return (
        <>
            <h1>Clientes</h1>
            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente key={cliente._id} cliente={cliente} />
                ))}
            </ul>

        </>

    )
}
export default Clientes