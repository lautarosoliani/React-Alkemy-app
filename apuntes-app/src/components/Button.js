import React from "react"

const Button = () => {
    //BUTTON PARA API
    const consultarAPI = async () => {
        const api = await fetch(
            "https://superheroapi.com/api/access-token/character-id"
        )
        const frase = await api.json()
        console.log(frase[0])
    }

    return (
        <button type="submit" onClick={consultarAPI}>
            API BUTTON
        </button>
    )
}

export default Button
