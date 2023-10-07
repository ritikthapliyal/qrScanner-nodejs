import React from 'react'
import Html5QrcodePlugin from './Html5Qr'
import reactDom from 'react-dom'

function ScannerOverlay({setShowOverlay,setBarcodeData}) {

    const onNewScanResult = (decodedText, decodedResult) => {
        setBarcodeData([decodedResult])
        setShowOverlay(false)
    }

    const portal = document.getElementById('portal')
    
    return reactDom.createPortal(
        <div id='portal'>
            <Html5QrcodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
                    />
        </div>
        ,portal)
}

export default ScannerOverlay