import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetData = (urlPath) => {
    const [product,setProduct]=useState([])
    const [error,setError]=useState(false)
    const[loading,setLoading]=useState()
  
    useEffect(()=>{
      ;(async()=>{
       try {
        setLoading(true)
        setError(false)
         const data = await axios(urlPath)
        
         setProduct(data.data)
         setLoading(false)
       } catch (error) {
        console.log(error)
        setError(true)
       }
      })()
    },[])
    return[
        error,
        loading,
        product
    ]
}


export default GetData