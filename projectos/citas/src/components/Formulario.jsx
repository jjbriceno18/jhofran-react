import React, { Fragment, useState} from 'react'

const Formulario = () => {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })

    // Funcion que se ejecuta cuando se escribe en un input
    const actualizarState = () => {
        console.log('escribiendo...')
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    placeholder="Nombre Dueño de la mascota"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
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