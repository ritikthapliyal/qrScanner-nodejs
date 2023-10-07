import React,{useEffect} from 'react'
import Html5QrcodePlugin from './Html5Qr'
import reactDom from 'react-dom'

function ScannerOverlay({setShowOverlay,setBarcodeData,showOverlay}) {
    
    const portal = document.getElementById('portal')

    const onNewScanResult = (decodedText, decodedResult) => {
        setBarcodeData([decodedResult])
        portal.style.zIndex = '-10'
        setShowOverlay(false)
    }

    useEffect(() => {
        portal.style.zIndex = showOverlay ? '10' : '-10'
    }, [showOverlay])
    
    return reactDom.createPortal(
                <Html5QrcodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
                    />
        ,portal)
}

export default ScannerOverlay