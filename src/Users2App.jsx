import { useState,useEffect } from "react"
import { UserList } from "./components/userList"
export const Users2App = () => {
    
    const [endPoint, setEndPoint] = useState('users')
        
    const handleFetch= ()=>{
        setEndPoint('comments')
      }
      
      // useEffect(() => {
      //     fetchUsers()
      //     }, [])
      
  
      return (
          <>
              <h1>Lista de Usuarios:</h1>
              <UserList endpoint={endPoint}></UserList>
              <button onClick={handleFetch}>Aqui se llama la API</button>
          </>
      )
}
