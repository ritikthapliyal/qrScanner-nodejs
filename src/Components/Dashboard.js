import React from 'react'
import { useNavigate } from "react-router-dom"
import ShowBarcodes from './ShowBarcodes'


function Dashboard() {
    
    const navigate=useNavigate()

    return (
        <div className='dashboard'>
            <button onClick={()=>{navigate('/scan',{ state : {openScanner:true}})}}>Scan Barcode</button>
            <ShowBarcodes/>
        </div>
    )
}

export default Dashboard