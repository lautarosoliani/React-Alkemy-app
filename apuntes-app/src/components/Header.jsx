import React from "react"

const Header = () => {
    const helloFromHeader = "Hola desde Header.jsx"

    const edad = 28

    let mensaje
    if (edad >= 18) {
        mensaje = `tu edad es ${edad} y eres mayor de edad.`
    } else {
        mensaje = `tu edad es ${edad} y eres menor de edad.`
    }

    return (
        <h1>
            {helloFromHeader}, {mensaje}
        </h1>
    )
}

export default Header
