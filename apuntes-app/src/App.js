import React from "react"
import Header from "./components/Header"
import FunctionDeclarationExpression from "./components/FunctionDeclarationExpression"
import FlujoDeDatosEntreComponentes from "./components/FlujoDeDatosEntreComponentes"
import Hooks from "./components/Hooks"

function App() {
    return (
        <>
            <h1>Hola desde App.js</h1>
            <Header />
            <FunctionDeclarationExpression />
            <FlujoDeDatosEntreComponentes ejemplo="Este 'string' es un ejemplo de ello." />
            <Hooks />
        </>
    )
}

export default App
