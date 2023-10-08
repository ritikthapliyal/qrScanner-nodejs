import React,{useEffect} from 'react'
import Html5QrcodePlugin from './Html5Qr'
import reactDom from 'react-dom'

function ScannerOverlay({setShowOverlay,setBarcodeData}) {

    const onNewScanResult = (decodedText, decodedResult) => {
        setBarcodeData([decodedResult])
        setShowOverlay(false)
    }
    
    return <Html5QrcodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
                    />
}

export default ScannerOverlay