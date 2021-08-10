import React, { useState } from "react"
import Header from "./components/Header"
import FunctionDeclarationExpression from "./components/FunctionDeclarationExpression"
import FlujoDeDatosEntreComponentes from "./components/FlujoDeDatosEntreComponentes"
import Hooks from "./components/Hooks"
import State from "./components/State"
import Heroe from "./components/Heroe"

function App() {
    const [heroes, guardarHeroes] = useState([
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
            <h2>
                <p>
                    Para lograr la lista de Heroes creo el useState que me da
                    los 4/6/N cantidad de objetos a iterar, luego sobre el
                    primer elemento del useState (sobre el valor inicial en este
                    caso 'heroe') itero con un '.map' y entonces me devuelve la
                    cantidad que haya en el useState (en este caso son 4). Y que
                    me devuleve? me devuelve el Component Heroe que le pase
                    debajo. Entonces agrego 'props', heroe=heroe, entonces
                    React-dev-tools ya va a identificar cada componente con las
                    caracteristicas de cada objeto. Ahora ir al nuevo componente
                    (Heroe.js) y hacer destructuring de 'heroe'. Eso mas poner
                    en el 'h1' heroe.nombre me va a devolver el nombre
                    renderizado de cada objeto/heroe. Siguiendo agregando props,
                    agrego 'key={heroes.id} para eliminar el 'error' rojo de la
                    'consola'
                </p>
            </h2>
            <h1>Lista de Heroes:</h1>
            {heroes.map((heroe) => (
                <Heroe key={heroe.id} heroe={heroe} />
            ))}

            <h2>
                Para crear el button es importante el evento onClick, y que su
                llamado a la funcion no sea directo sino primero unos parentesis
                y luego la arrow func que al final tenga unos parentesis para
                ejecutarla. Ademas sobre el Return crear un Const con el nombre
                del evento al clickear, en este caso 'verDetalles'. Ahora
                importante agregar 3 veces 'id' o 'nombre' dentro de los
                parentesis
            </h2>
        </>
    )
}

export default App
