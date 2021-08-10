import React, { useState } from "react"
import Header from "./components/Header"
import FunctionDeclarationExpression from "./components/FunctionDeclarationExpression"
import FlujoDeDatosEntreComponentes from "./components/FlujoDeDatosEntreComponentes"
import Hooks from "./components/Hooks"
import State from "./components/State"
import Heroe from "./components/Heroe"

function App() {
    //crear listado de heroes
    const [heroes, guardarHeroes] = useState([
        { id: 1, nombre: "primero" },
        { id: 2, nombre: "segundo" },
        { id: 3, nombre: "tercero" },
        { id: 4, nombre: "cuarto" },
    ])

    //useState para agregar, quitar y nose si editar
    const [selecciondeheroes, modificarSeleccionDeHeroes] = useState([])

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
            <h1>Lista de Heroes: 'useState de heroes'</h1>
            {heroes.map((heroe) => (
                <Heroe
                    key={heroe.id}
                    heroe={heroe}
                    heroes={heroes}
                    selecciondeheroes={selecciondeheroes}
                    modificarSeleccionDeHeroes={modificarSeleccionDeHeroes}
                />
            ))}

            <h2>
                Para modificar la lista de heroes creo el 2do useState llamado
                'selecciondeheroes' y su funcion 'modificarSeleccionDeHeroes'
                los agrego de movida a las props del componente 'Heroe' que use
                en el primer useState. Luego hago destructuring y paso ambos al
                componente Heroe.js. De igual manera sumo a las props y al
                destructuring una tercer prop llamada 'heores', que voy a usar
                en Heroe.js para usar el metodo 'filter' e identificar el heroe
                seleccionado
            </h2>
        </>
    )
}

export default App
