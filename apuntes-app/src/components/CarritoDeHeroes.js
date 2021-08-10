import React from "react"
import Heroe from "./Heroe"

const CarritoDeHeroes = ({ selecciondeheroes }) => {
    return (
        <div className="carrito">
            <h2>Carrito de Heroes</h2>

            {selecciondeheroes.length === 0 ? (
                <p>No hay heroes en el carrito</p>
            ) : (
                selecciondeheroes.map((heroe) => (
                    <Heroe key={heroe.id} heroe={heroe} />
                ))
            )}
        </div>
    )
}

export default CarritoDeHeroes
