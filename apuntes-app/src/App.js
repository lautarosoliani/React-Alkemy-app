import React, { useState } from "react"
import Header from "./components/Header"
import FunctionDeclarationExpression from "./components/FunctionDeclarationExpression"
import FlujoDeDatosEntreComponentes from "./components/FlujoDeDatosEntreComponentes"
import Hooks from "./components/Hooks"
import State from "./components/State"

function App() {
    const [productos, guardarProductos] = useState([
        { id: 1, nombre: "primero", precio: 10 },
        { id: 2, nombre: "segundo", precio: 20 },
        { id: 3, nombre: "tercero", precio: 30 },
        { id: 4, nombre: "cuarto", precio: 40 },
    ])

    return (
        <>
            <h1>Hola desde App.js</h1>
            <Header />
            <FunctionDeclarationExpression />
            <FlujoDeDatosEntreComponentes ejemplo="Este 'string' es un ejemplo de ello." />
            <Hooks />
            <State />
        </>
    )
}

export default App
