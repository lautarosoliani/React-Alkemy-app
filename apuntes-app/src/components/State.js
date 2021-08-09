import React from "react"

const State = () => {
    return (
        <>
            <h1>Desde State.js</h1>
            <h2>
                <p>
                    Se declara en App.js PERO suele venir desde una API o de una
                    base de datos
                </p>
                <p>Hooks viene con una funcion llamada useState</p>
                <p>import React, "(useState)" from 'react';</p>
                <p>Esta funcion cuenta con dos partes</p>
                <p>
                    const [ clientes, setClientes / guardarClientes ] =
                    useState()
                </p>
                <p>
                    Donde: clientes = es el State inicial/actual & setClientes =
                    funcion que cambia el State, suele ser para
                    agregar/eliminar/guardar
                </p>
                <p>
                    Creamos un State por ejemplo para leer lo que ingresa el
                    usuario cuando llena el form, o cuando agrega algo al
                    carrito de compras, etc.
                </p>
                <p>
                    Luego del signo '=' va la palabra useState que rodea entre
                    () al number/boolean/array/object, que puede estar definido
                    o vacio, por ejemplo para un form de login comienza vacio
                </p>
            </h2>
        </>
    )
}

export default State
