import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente'

const Inicio = () => {

        const [clientes, setClientes] = useState([])
    useEffect(() => {
        const obtenerClientesAPI = async() =>{
            try {
                const url = 'http://localhost:4000/clientes'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerClientesAPI()
    },[])

    const handleEliminar = async id =>{
        const confirmar= confirm('¿Quieres eliminar este registro? Esta acción no se pude deshacer')

        if (confirmar){
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url, {
                    method:'DELETE'
                })
                await respuesta.json()
                const arrayClientes = clientes.filter(cliente => cliente.id !== id)
                setClientes(arrayClientes)
            } catch (error) {
                console.log(error)
            }
            // no location.reload(), usamos useState!!!
        }
    }   
    return (
        <>
        <h1 className='font-black text-cyan-600 text-4xl'>Clientes</h1>
        <p className='mt-3'>Administra tus Clientes</p>
            <table className="w-full mt-5 table-auto bg-white">
                <thead className="bg-cyan-600 text-white border-2 border-cyan-600">
                <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                </tr>
                </thead>
                <tbody>
                    {clientes.map( cliente => (
                        <Cliente 
                        key= {cliente.id}
                        cliente = {cliente}
                        handleEliminar = {handleEliminar}
                        />
                    )
                    )}
                </tbody>
            </table>
    </>
    )
}

export default Inicio
