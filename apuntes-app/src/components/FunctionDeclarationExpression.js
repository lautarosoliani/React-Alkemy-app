import React from "react"

const FunctionDeclarationExpression = () => {
    return (
        <>
            <h1>Desde FunctionDeclarationExpression.js</h1>
            <h2>
                <p>
                    Hay dos tipos de funciones y ambas funcionan: Function
                    declaration & Function expression
                </p>
            </h2>
        </>
    )
}

export default FunctionDeclarationExpression

// FUNCTION DECLARATION
//
// function Header() {
//         return(
//                 <h1>From Header</h1>
//         )
// }

//FUNCITON EXPRESSION
//
// truco: en este caso se puede eliminar el RETURN y las llaves
// que quedan implicitos en los parentesis
//
// const Header = () => {
//         return (
//                 <h1>From Header</h1>
//         )
// }
