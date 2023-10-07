import React from 'react'
import Html5QrcodePlugin from './Html5Qr'
import './Css.css'
import { useNavigate } from 'react-router-dom'

function Scanner() {

    const navigate = useNavigate()

    const onNewScanResult = (decodedText, decodedResult) => {
        navigate('/',{ state : decodedResult})
    }

    return (
        <div className="Scanner">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    )
}

export default Scanner