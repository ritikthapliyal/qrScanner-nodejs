import React,{useState} from 'react'
import Html5QrcodePlugin from './Html5Qr'
import './Css.css'

function Scanner() {
    
    const [barcodeData, setBarcodeData] = useState({})
    const [stringData, setStringData] = useState("haha")
    const onNewScanResult = (decodedText, decodedResult) => {
        setBarcodeData(decodedResult)
        setStringData(JSON.stringify(decodedResult))
    }
    return (
        <div className="Scanner">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
            <div>{stringData}</div>
        </div>
    )
}

export default Scanner