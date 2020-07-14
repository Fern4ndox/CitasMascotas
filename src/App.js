import React,{Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  //Citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales)
  {
    citasIniciales = [];
  }
  //Arreglo de Citas
  const [citas, guardarCitas] = useState(citasIniciales);
  //UseEffect para realizar operaciones cuando el State cambia
  useEffect(()=>{
    localStorage.setItem('citas',JSON.stringify(citas));
  },[citas, citasIniciales]);
  //Función Tomar Citas Actuales y Agregue nueva
  const crearCita = cita =>{
    //Función para almacenar citas
    guardarCitas([
      //Copía del State
      ...citas,cita]);
  }
  //Mensaje Condicional
  const titulo  = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas';
  //Funcion Eliminar por ID
  const eliminarCita =id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
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
          <h2>{titulo}</h2>
          {citas.map(cita =>(
            <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
          ))}
          </div>
        </div>
    </div>

    </Fragment>
  );
}

export default App;
