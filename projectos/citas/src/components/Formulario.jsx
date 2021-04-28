import React, { Fragment, useState} from 'react'
import { v4 as uuid } from 'uuid'

const Formulario = () => {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })
    const [ error, actualizarError ] = useState(false)

    // Funcion que se ejecuta cuando se escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita

    // cuando envien el formulario de
    const submitCita = e => {
        e.preventDefault()

        // validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return
        }

        // eliminar id
        actualizarError(false)

        // asignar un id
        cita.id = uuid()
        // crear la cita

        // reiniciar el formulario
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    placeholder="Nombre Dueño de la mascota"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;