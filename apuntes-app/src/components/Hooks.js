import React from "react"

const Hooks = () => (
    <>
        <h1>Desde Hooks.js</h1>
        <h2>
            <p>Hooks viene con una funcion llamada useState</p>
            <p>import React, "(useState)" from 'react';</p>
            <p>Esta funcion cuenta con dos partes</p>
            <p>
                const [ clientes, setClientes / guardarClientes ] = useState()
            </p>
            <p>
                Donde: clientes = es el State inicial/actual & setClientes =
                funcion que cambia el State
            </p>
            <p>
                BENEFICIOS DE LOS HOOKS: menor cantidad de codigo & mayor
                facilidad para implementar reducers, administrar el state y el
                context.
            </p>
            <p>
                Se dividen en 2 grupos: Basicos - useState y useEffect y van a
                estar en el 100% de los proyectos con React. Y los Avanzados,
                tal vez no los utilices en todos tus proyectos y son useContext,
                useRef, useReducer, useCallback, useMemo
            </p>
        </h2>
    </>
)

export default Hooks
