import React from 'react'
import { useNavigate } from "react-router-dom"
import ShowBarcodes from './ShowBarcodes'
import { useLocation } from 'react-router-dom'
import { useAddBarcodeMutation } from '../store/apis/dashboardApis'



function Dashboard() {
    
    const navigate=useNavigate()
    const location = useLocation()

    
    const [ addBarcode, addBarcodeOptions] = useAddBarcodeMutation()

    const handleAddBarcode = async()=>{
        try{
            const response = await addBarcode(location.state)
        }
        catch(err){
            console.log(err)
        }
    }
    

    return (
        <div className='dashboard'>
            <button onClick={()=>{navigate('/scan')}}>Scan</button>
            <button onClick={handleAddBarcode}>Add Barcode</button>
            <ShowBarcodes/>
        </div>
    )
}

export default Dashboard