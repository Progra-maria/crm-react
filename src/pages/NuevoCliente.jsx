
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
    return (
        <>
            <h1 className='font-black text-cyan-900 text-4xl'>Nuevo Cliente</h1>
            <p className='mt-3'>Rellena los siguientes campos para registrar un cliente</p>
            <Formulario />
        </>
    )
}

export default NuevoCliente
