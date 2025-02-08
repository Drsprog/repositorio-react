import { useState,useEffect } from "react"
import { fetchData } from "../../helpers/fetchData"

export const useFetchData = (endpoint) => {
  const [data, setdata] = useState([])
  const [isLoading, setIsLoading] = useState(true)
        
      
        useEffect(()=>{
          fetchData(endpoint).
          then(res=>{
            setdata(res.data)
            setIsLoading(res.isLoading)
          })

        },[endpoint])
  return {data,isLoading}
}
