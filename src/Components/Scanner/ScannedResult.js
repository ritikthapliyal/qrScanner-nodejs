import React, { useState } from 'react'
import { useAddBarcodeMutation } from '../../store/apis/dashboardApis'
import { useNavigate, useLocation, json } from 'react-router-dom'
import SessionExpiredOverlay from '../SessionExpiredOverlay'

function ScannedResult() {

    const navigate = useNavigate()
    const location = useLocation()
    const barcodeData = location.state || [{nae:"ritik"}]

    const [showSessionExpired,setShowSessionExpired] = useState(false) 

    const [ addBarcode, addBarcodeOptions] = useAddBarcodeMutation()

    const handleAddBarcode = async()=>{

        try{
            const response = await addBarcode()
            console.log( response.error.status)

            if(response.error && response.error.status && response.error.status === 401) {
                setShowSessionExpired(true)
            }
            
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='Scanner'>{
                barcodeData.length === 0 
                ?   <div className='no_barcode'>
                        <p>No Barcode Scanned.</p>
                        <button onClick={()=>{navigate('/scan')}}>Scan</button>
                    </div>
                :   <div className='scanned_barcode'>
                        <p>Barcode : {JSON.stringify(location)}</p>
                        <div>
                            <button onClick={()=>{navigate('/scan')}}>Scan Again</button>
                            <button onClick={handleAddBarcode}>Add Barcode</button>
                        </div>
                        
                    </div>
            }
            <div id='portal' style={{display : showSessionExpired ? "flex" : "none",zIndex : showSessionExpired ? "10" : "-10"}}></div>
            {
                showSessionExpired && <SessionExpiredOverlay setShowSessionExpired={setShowSessionExpired}/>
            }
        </div>
    )
}

export default ScannedResult