import React from 'react'
import { useNavigate } from "react-router-dom"
import ShowBarcodes from './ShowBarcodes'


function Dashboard() {
    
    const navigate=useNavigate()

    return (
        <div className='dashboard'>
            <h2 style={{color:"#4369CE",marginTop:"20px", fontSize:"20px"}}>Spandan Stock Logger</h2>
            <button style={{width:"90%"}} onClick={()=>{navigate('/scan')}}>Scan Barcode</button>
            <ShowBarcodes/>
        </div>
    )
}

export default Dashboard