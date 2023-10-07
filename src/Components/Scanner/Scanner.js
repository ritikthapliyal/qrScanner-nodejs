import React,{useState} from 'react'
import Html5QrcodePlugin from './Html5Qr'
import './Css.css'

function Scanner() {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        setDecodedResults([decodedResult])
    }
    return (
        <div className="Scanner">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
            {decodedResults}
        </div>
    );
}

export default Scanner