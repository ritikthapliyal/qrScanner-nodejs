import React, { useState } from 'react'
import ScannerOverlay from './ScannerOverlay'
import './Css.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAddBarcodeMutation } from '../../store/apis/dashboardApis'
import { useDispatch } from 'react-redux'
import { setAuthState } from '../../store/authSlice'


function Scanner() {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showOverlay,setShowOverlay] = useState(location.state || false)
    const [barcodeData,setBarcodeData] = useState([])

    const [ addBarcode, addBarcodeOptions] = useAddBarcodeMutation()

    const handleAddBarcode = async()=>{
        try{
            const response = await addBarcode(location.state)
            console.log(response)

            if (response.error) {
                dispatch(setAuthState({isLoggedIn : false}))
                localStorage.removeItem('token')
            }
            
            navigate('/')
            
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="Scanner">
            {
                showOverlay && <ScannerOverlay setBarcodeData={setBarcodeData} setShowOverlay={setShowOverlay} showOverlay={showOverlay}/>
               
            }
            {
                barcodeData.length === 0 
                ?   <div className='no_barcode'>
                        <p>No Barcode Scanned.</p>
                        <button onClick={()=>{setShowOverlay(true)}}>Scan</button>
                    </div>
                :   <div className='scanned_barcode'>
                        <p>Barcode : {barcodeData[0].decodedText}</p>
                        <div>
                            <button onClick={()=>{setShowOverlay(true)}}>Scan Again</button>
                            <button onClick={handleAddBarcode}>Add Barcode</button>
                        </div>
                        
                    </div>
            }
        </div>
    )
}

export default Scanner