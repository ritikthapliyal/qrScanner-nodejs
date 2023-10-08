import React, { useEffect, useState } from 'react'
import { useAddBarcodeMutation } from '../../store/apis/dashboardApis'
import { useNavigate, useLocation, json } from 'react-router-dom'
import SessionExpiredOverlay from '../SessionExpiredOverlay'
import Loading from '../Loading'

function ScannedResult() {

    const navigate = useNavigate()
    const location = useLocation()
    const barcodeData = location.state || {decodedText:""}

    const [showSessionExpired,setShowSessionExpired] = useState(false) 

    const [ addBarcode, addBarcodeOptions] = useAddBarcodeMutation()

    const handleAddBarcode = async()=>{

        try{
            const response = await addBarcode(location.state)
            console.log(response)

            if(response.error && response.error.status && response.error.status === 401) {
                setShowSessionExpired(true)
            }

           
            if(response.data && response.data.status && response.data.status === 201){
                navigate('/',{state:Math.random()})
            }
            
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{},[barcodeData])

    return (
        <div className='Scanner'>{
                barcodeData.decodedText.lenght === 0
                ?   <div className='no_barcode'>
                        <p>No Barcode Scanned.</p>
                        <button onClick={()=>{navigate('/scan')}}>Scan</button>
                    </div>
                :  addBarcodeOptions.isLoading ? <Loading/> :
                    <div className='scanned_barcode'>
                        <p>Barcode : {barcodeData.decodedText}</p>
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