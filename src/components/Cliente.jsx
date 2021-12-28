import {useNavigate} from 'react-router-dom'

const Cliente = ({cliente}) => {
const navigate = useNavigate()

    const {nombre, empresa, email, telefono, id, notas} = cliente
    return (
        <tr className="border-2 border-cyan-600 hover:bg-gray-50">
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span> {email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Tel.: </span>{telefono}</p>
                </td>
            <td className="p-3">{empresa}</td>
            <td className="p-5">
            <button className="bg-cyan-100 hover:bg-cyan-300 block w-full text-cyan-900 text-bold m-3 p-2  rounded-md"
                type="button"
                onClick={() => navigate(`/clientes/${id}`)}
                >Ver</button>
                <button className="bg-blue-100 hover:bg-blue-300 block w-full text-blue-900 text-bold m-3 p-2  rounded-md"
                type="button"
                >Editar</button>
                <button className="bg-red-100 hover:bg-red-300 block w-full text-red-900 text-bold m-3 p-2 rounded-md"
                type="button"
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente
