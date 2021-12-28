import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const VerCLiente = () => {

    const [ cliente, seCliente ] = useState({})

    const { id } = useParams()
        console.log(id)

    useEffect(() => {
        
        const obtenerClienteAPI = async ()=>{
            try {

                const url = `http://localhost:4000/clientes/${id}`

                const respuesta = await fetch(url)

                const resultado = await respuesta.json()

                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerClienteAPI()
    }, [])

    console.log(id)
    return (
        <div>
            Ver cliente
            <p>{resultado}</p>
        </div>
    )
}

export default VerCLiente
