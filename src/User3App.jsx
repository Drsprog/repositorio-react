import React, { useState } from 'react'
import { UserHook } from './components/UserHook'

export const User3App = () => {
  const [endPoint, setEndPoint] = useState('users')
          
      const handleFetch= ()=>{
          setEndPoint('comments')
        }
  
    return (
              <>
                  <h1>Lista de Usuarios:</h1>
                  <UserHook endpoint={endPoint}></UserHook>
                  <button onClick={handleFetch}>Aqui se llama la API</button>
              </>
  )
}
