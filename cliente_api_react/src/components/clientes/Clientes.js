import React, { useEffect } from 'react'

const Clientes = () => {
    const [clientes, guardarClient] = useState([])
    const consultar_api = async () => {
        try {
            const respuesta = await fetch("http://localhost:3000/api/clientes")
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
            <ul>
                {clientes.map(cliente => (
                    <Cliente cliente=  /{ cliente } >
                ))};
            </ul>

        </>
    )
}

export default Clientes