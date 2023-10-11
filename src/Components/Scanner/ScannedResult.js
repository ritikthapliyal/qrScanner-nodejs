import React, { useEffect, useState } from 'react'
import { useAddBarcodeMutation } from '../../store/apis/dashboardApis'
import { useNavigate, useLocation } from 'react-router-dom'
import SessionExpiredOverlay from '../SessionExpiredOverlay'
import Loading from '../Loading'
import { addLatestBarcode } from '../../store/authSlice'
import { useDispatch } from 'react-redux'


function ScannedResult() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const barcodeData = location.state || {decodedText:""}

    const [showSessionExpired,setShowSessionExpired] = useState(false) 

    const [ addBarcode, addBarcodeOptions] = useAddBarcodeMutation()

    const handleAddBarcode = async()=>{

        try{
            const response = await addBarcode(location.state)
            // const response = await addBarcode({result:{text:"hhgggg",format:{formatNmae:"haha"}}})
            console.log(response)

            if(response.error && response.error.status && response.error.status === 401) {
                setShowSessionExpired(true)
            }
           
            if(response.data && response.data.status && response.data.status === 201){
                navigate('/')
            }
            
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{},[barcodeData])

    if(addBarcodeOptions.isError){
        console.log(addBarcodeOptions.error)
    }

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
                        {
                            addBarcodeOptions.isError && 
                            <span style={{color:"#ff1010"}}>Failed : {addBarcodeOptions.error.data.error}</span>
                        }
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