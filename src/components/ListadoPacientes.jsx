import Paciente from './Paciente'

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
           <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
           <p className='text-xl mt-5 mb-10 text-center'>
             Administra tus {''}
             <span className='text-indigo-600 font-bold text-center'>Pacientes y Citas</span>
           </p>
     
           {pacientes.map( (paciente,index) => (
                 <Paciente 
                   //key={index}  //es una mala practica hacerlo así
                   key={paciente.id} // la prop id la habremos generado con una funcion que creara un id dinamico único, Math.random o Date.now()
                   paciente={paciente}
                   setPaciente={setPaciente}
                   eliminarPaciente={eliminarPaciente}
                  />   
           ))}
        </> 
      )
      : (
        <>
        <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
           <p className='text-xl mt-5 mb-10 text-center'>
             Comienza a agregar pacientes{''}
             <span className='text-indigo-600 font-bold text-center'> {''} y apareceran en este lugar</span>
           </p>     
        </>
      )}

   
     
    
    </div>
  )
}

export default ListadoPacientes

