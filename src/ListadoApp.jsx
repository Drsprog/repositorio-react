import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"
const Items = ({ nombre, visto }) => {
    return (
        <li className="rojito">{nombre}
            {visto ? '✅' : '⛔'}
            {visto && '✅'}
        </li>
    )
}



export const ListadoApp = () => {

    const addTask = () => {
        setarreglo([...arreglo, { nombre: 'nuevo', visto: false }])
    }

    let listadoSecciones = [
        { id:1 ,nombre: "Uso de bits", visto: true },
        { id:2 ,nombre: 'Instalaciones necesarias', visto: true },
        { id:3 ,nombre: "Componentes", visto: true },
        { id:4 ,nombre: "Variables en JSX", visto: true },
        { id:5 ,nombre: "Props", visto: true },
        { id:6 ,nombre: "Eventos", visto: true },
        { id:7 ,nombre: "UseState", visto: true },
        { id:8 ,nombre: "Redux", visto: false },
        { id:9 ,nombre: "customHook", visto: false }
        ,]

    const onAgregarTarea= (val)=>{
        let valor = val.trim()
        if(valor < 1) return
        const envio={
            id: arreglo.length+1,
            nombre: val,
            visto: false
        }
        setarreglo([...arreglo, envio])
    }
    
    const [arreglo, setarreglo] = useState(listadoSecciones)
    console.log(arreglo)
    return (
        <>
            <h1>Listado de temas del curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            <ol>
                {arreglo.map(items => <Items key={items.nombre} nombre={items.nombre} visto={items.visto}></Items>)}
            </ol>

            <button onClick={() => addTask()}>Agregar tarea</button>
        </>
    )
}