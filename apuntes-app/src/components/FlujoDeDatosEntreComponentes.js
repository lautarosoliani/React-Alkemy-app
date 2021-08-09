import React from "react"

const FlujoDeDatosEntreComponentes = ({ ejemplo }) => {
    return (
        <>
            <h1>Desde FlujoDeDatosEntreComponentes.js</h1>
            <h2>
                <p>
                    Existen varias formas en las que fluyen los datos entre los
                    componentes, por ejemplo, desde App.js hacia los
                    components.js se puede hacer dandole una propiedad como si
                    fuera un class de CSS. Pueden ser booleanos, numeros,
                    strings, e incluso funciones. Se llaman PROPS y junto con
                    DESTRUCTURING como buena practica para no poner 'props. ...'
                    cada vez que lo utilizo
                </p>
                <p>{ejemplo}</p>
                <p>
                    Buena practica: dar el mismo nombre a la 'Prop' que a la
                    'funcion, o variable, o booleano, o string'. Por ejemplo
                    fecha=fecha (el segundo fecha entre llaves)
                </p>
            </h2>
        </>
    )
}

export default FlujoDeDatosEntreComponentes
