import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Dashboard() {
    
    const navigate=useNavigate()
    const [data,setData] = useState([])

    // useEffect(()=>{
    //     try{
    //         const response= await axios.post("https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev/login",{username,password},{withCredentials:true})
    //         navigate('/Dashboard')
    //     }
    //     catch(err){
    //         console.log(err)
    //     } 
    // },[])
    
    
    return (
        <div>
            <button onClick={()=>{navigate('/scan')}}>Scan</button>
            <>{data}</>
        </div>
    )
}

export default Dashboard