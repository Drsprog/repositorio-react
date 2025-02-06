const Items = ({nombre,visto}) => {
    return(
        <li>{nombre}
        {visto ? '✅' : '⛔' }
        {visto && '✅'}
        </li>
    )
}

export const Listado = () => {
  return (
    <>
    <h1>Listado de temas del curso</h1>
    <ol>
        <Items nombre="Instalaciones necesarias" visto={true}></Items>  
        <Items nombre="Uso de bits" visto={true}></Items>  
        <Items nombre="Componentes" visto={true}></Items>  
        <Items nombre="Variables en JSX" visto={true}></Items>  
        <Items nombre="Props" visto={true}></Items>  
        <Items nombre="Eventos" visto={true}></Items>  
        <Items nombre="UseState" visto={true}></Items>  
        <Items nombre="Redux" visto={false}></Items>  
        <Items nombre="customHook" visto={false}></Items>  
    </ol>
    </>
  )
}

