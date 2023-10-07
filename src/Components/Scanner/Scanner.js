import React, { useState } from 'react'
import ScannerOverlay from './ScannerOverlay'
import './Css.css'
import { useNavigate, useLocation } from 'react-router-dom'


function Scanner() {

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const [showOverlay,setShowOverlay] = useState(location.state || false)
    const [barcodeData,setBarcodeData] = useState([])

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
                        <p>{barcodeData[0].decodedText}</p>
                        <button>Add Barcode</button>
                    </div>
            }
        </div>
    )
}

export default Scanner