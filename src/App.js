import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario'


function App() {
  //Arreglo de Citas
  const [citas, guardarCitas] = useState([]);
  //Función Tomar Citas Actuales y Agregue nueva
  const crearCita = cita =>{
    //Función para almacenar citas
    guardarCitas([
      //Copía del State
      ...citas,cita]);
  }
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
    <div className="container">
        <div className="row">
          <div className="one-half column">
          <Formulario
          crearCita={crearCita}
          />
          </div> 
          <div className="one-half column">
          Citas
          </div>
        </div>
    </div>

    </Fragment>
  );
}

export default App;
