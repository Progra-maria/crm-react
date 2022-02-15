import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
 
const VerCliente = () => {
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)
 
  const { id } = useParams()
 
  useEffect(() => {

    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }
      setCargando(!cargando)
    }
    obtenerClienteAPI()
  }, [])
 
  console.log(id)
  return (
    cargando ? <Spinner /> :
     Object.keys(cliente).length === 0 ?
      <p>No hay resultados</p> : 
      (
        <div>
      
            <h1 className="font-black text-cyan-900 text-4xl">Cliente: {cliente.nombre}</h1>
            <p className="mt-3 text-gray-500 text-bold">Información del cliente</p>
            
              {cliente.nombre &&
              <p className="text-xl mt-10">
              <span className="font-bold text-cyan-600">Cliente: </span>
              <span className="text-gray-500"> {cliente.nombre}</span>
              </p>
              }
            {cliente.email &&
              <p className="text-xl mt-4">
              <span className="font-bold text-cyan-600 ">Email: </span>
              <span className="text-gray-500"> {cliente.email}</span>
              </p>
            }
            {cliente.telefono &&
              <p className="text-xl mt-4">
              <span className="font-bold text-cyan-600 ">Teléfono: </span>
              <span className="text-gray-500"> {cliente.telefono}</span>
              </p>
            }
            {cliente.empresa &&
              <p className="text-xl mt-4">
              <span className="font-bold text-cyan-600 ">Empresa: </span>
              <span className="text-gray-500"> {cliente.empresa}</span>
              </p>
            }
            {cliente.notas &&
              <p className="text-xl mt-4">
              <span className="font-bold text-cyan-600 ">Notas: </span>
              <span className="text-gray-500"> {cliente.notas}</span>
              </p>
            }
    
    </div>
  )
  )
}
 
export default VerCliente