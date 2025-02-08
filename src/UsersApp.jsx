import { useState,useEffect } from "react"

export const UsersApp = () => {
    const [users, setusers] = useState([])
    const fetchUsers = async()=>
    {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data= await response.json()
            setusers(data)
        } catch (error) {
            console.log(error)
        }
        

    }

    const handleFetch= ()=>{
        fetchUsers()
    }

    // useEffect(() => {
    //     fetchUsers()
    //     }, [])
    

    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <ul>
                {users.map(user=> <li key={user.id}>{user.name}</li> )}
            </ul>
            <button onClick={handleFetch}>Aqui se llama la API</button>
        </>
    )
}
