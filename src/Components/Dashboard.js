import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import ShowBarcodes from './ShowBarcodes'
import { useSelector } from 'react-redux'


function Dashboard() {
    
    const navigate=useNavigate()

    const {shouldRefresh} = useSelector((state) => state.authSlice)

    useEffect(()=>{},[shouldRefresh])

    return (
        <div className='dashboard'>
            <button onClick={()=>{navigate('/scan')}}>Scan Barcode</button>
            <ShowBarcodes/>
        </div>
    )
}

export default Dashboard