import React from "react"

const Heroe = ({
    heroe,
    heroes,
    selecciondeheroes,
    modificarSeleccionDeHeroes,
}) => {
    //puedo desestructurar haciendo:
    const { nombre, id } = heroe
    //de esta manera donde decia 'heroe.nombre' ahora dice solamente {nombre}

    // '.filter' lo que hace es: le voy a pasar un ID, va a iterear y cuando lo encuentre
    // va a crear un array nuevo con ese heroe
    const seleccionarHeroe = (id) => {
        const heroe = heroes.filter((heroe) => heroe.id === id)[0]
        modificarSeleccionDeHeroes([...selecciondeheroes, heroe])
    }

    return (
        <>
            <h1>{nombre}</h1>
            <h2>Nombre, imagen, powerStats, ver detalle, eliminar</h2>
            <button type="button" onClick={() => seleccionarHeroe(id)}>
                Detalles
            </button>
        </>
    )
}

export default Heroe

{
    /* <h2>
Para crear el button es importante el evento onClick, y que su
llamado a la funcion no sea directo sino primero unos parentesis
y luego la arrow func que al final tenga unos parentesis para
ejecutarla. Ademas sobre el Return crear un Const con el nombre
del evento al clickear, en este caso 'verDetalles'. Ahora
importante agregar 3 veces 'id' o 'nombre' dentro de los
parentesis
</h2> */
}
