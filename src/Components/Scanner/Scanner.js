import React, { useState } from 'react'
import ScannerOverlay from './ScannerOverlay'
import './Css.css'
import { useNavigate } from 'react-router-dom'

function Scanner() {

    const navigate = useNavigate()
    const [showOverlay,setShowOverlay] = useState(true)
    const [barcodeData,setBarcodeData] = useState([])

    return (
        <div className="Scanner">
            {
                showOverlay && 
                <ScannerOverlay setBarcodeData={setBarcodeData} setShowOverlay={setShowOverlay}/>
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
            <></>
        </div>
    )
}

export default Scanner