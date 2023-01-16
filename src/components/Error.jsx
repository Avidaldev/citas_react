import React from 'react'

//const Error = ({mensaje}) => { ///manera de pasar la prop mensaje particular
const Error = ({children}) => { /// asi se puede pasar todo un html completo
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        {/* <p>{mensaje}</p> */}
        {children}
    </div>
  )
}

export default Error
