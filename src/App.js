import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


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
          <h2>Administrar citas</h2>
          {citas.map(cita =>(
            <Cita
            key={cita.id}
            cita={cita}
            />
          ))}
          </div>
        </div>
    </div>

    </Fragment>
  );
}

export default App;
