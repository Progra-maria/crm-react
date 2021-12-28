import React from 'react'

const Alerta = ({children}) => {
    return (
        <div 
        className="text-center my-2 py-4 bg-red-100 text-red-800 text-bold">
        {children}
        </div>
    )
}

export default Alerta
