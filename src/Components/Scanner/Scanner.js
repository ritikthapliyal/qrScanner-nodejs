import React, { useState } from 'react'
import './Css.css'
import Html5QrcodePlugin from './Html5Qr'
import { useNavigate } from 'react-router-dom'


function Scanner() {

    const navigate = useNavigate()
    const onNewScanResult = (decodedText, decodedResult) => {
        navigate('/scanned-result',{ state : [decodedResult]})
    }

    return (
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}>
            </Html5QrcodePlugin>
            
    )
}



export default Scanner