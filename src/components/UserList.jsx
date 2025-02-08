import { useState,useEffect } from "react"
export const UserList = ({endpoint}) => {
    const [data, setdata] = useState([])
      const fetchData = async()=>
      {
          try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
              const data= await response.json()
              setdata(data)
          } catch (error) {
              console.log(error)
          }
      }
    
      useEffect(()=>{
        fetchData()
      },[endpoint])

    return (
        <>
            <ul>
                {endpoint == 'users' ? data.map(item=> <li key={item.id}>{item.name}</li> )
                                    :  data.map(item=> <li key={item.id}>{item.body}</li> )}
            </ul>
        </>
    )
}
