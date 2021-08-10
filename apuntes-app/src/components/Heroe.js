import React from "react"

const Heroe = ({ heroe }) => {
    //puedo desestructurar haciendo:
    const { nombre, precio, id } = heroe
    //de esta manera donde decia 'heroe.nombre' ahora dice solamente {nombre}

    const verDetalles = (id) => {
        console.log("cargando detalles del heroe", id)
    }

    return (
        <>
            <h1>{nombre}</h1>
            <h2>Nombre, imagen, powerStats, ver detalle, eliminar</h2>
            <button type="button" onClick={() => verDetalles(id)}>
                Detalles
            </button>
        </>
    )
}

export default Heroe
