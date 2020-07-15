import React,{Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    //Crear State de Citas
    const [cita, actualizaCita] =useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const[error, actualizarError] = useState(false)
    //Función cada vez que el usuario escriba en el input
    const actualizarState = (e) =>
    {
        //Ingresar datos al State
        actualizaCita({
            //Copia del State
            ...cita,
            //Ingresamos lo que se teclee en la copía de Cita
            [e.target.name] : e.target.value
        })
    }
    //Extraer Valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    //Enviar Formulario
    const submitCita = e => {
        e.preventDefault(); 
        //Validación de Datos
        if(mascota.trim() === ''|| propietario.trim() === '' || fecha.trim() === ''
        || hora.trim() === '' || sintomas.trim() === '')
        {
            //Cambiamos el estado de error a True para que sea visible
            actualizarError(true);
            return; 
        }
        //Eliminamos el msj de error si hubo
        actualizarError(false);
        //Asignar ID
        cita.id = uuidv4();
        //Crear Cita
        crearCita(cita);
        //Reiniciar Form
        actualizaCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }; 
        
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {/* Mensaje de Error */}
            {error ? 
            <p className="alerta-error">Todos los campos son obligatorio</p> : null}
            <form
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño de la Mascota"
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
                <label>Sintomas</label>
               <textarea
               className="u-full-width"
               name="sintomas"
               onChange={actualizarState}
               value={sintomas}
               />
                <button
                type="submit"
                className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     )
    
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;