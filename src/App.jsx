import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState,useEffect} from 'react'

function App() {

  const [pacientes,setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  useEffect(()=>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes"))??  [];
      console.log("------------------------",pacientesLS,"--------------------")
      setPacientes(pacientesLS)
    }
    obtenerLS(); 
  },[])

  useEffect(()=>{
    console.log("Ha cambiado el estado de pacientes")
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  
  },[pacientes])

  const eliminarPaciente = (id) => {
    ///el metodo filter hace una copia del array original sin modificarlo, aqui copio los registros que tengan ese Id
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
     setPacientes(pacientesActualizados)
  }


  return (
    <div className="container mx-auto mt-20 bg-gray-300" >
      <Header
  
      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
         pacientes={pacientes}
         setPaciente={setPaciente}
         //paciente={paciente}
         eliminarPaciente={eliminarPaciente }
        
        />
      </div>
   
    </div>
  )
}

export default App
