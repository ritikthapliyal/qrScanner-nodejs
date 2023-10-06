import React,{useState} from 'react'
import Html5QrcodePlugin from './Html5Qr';
import ResultContainerPlugin from './Resultcontainerplugin';

function Scanner() {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
    }

    return (
        <div>
            <section className="App-section">
                    <div className="App-section-title"> Html5-qrcode React demo</div>
                    <Html5QrcodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
                    />
                    <ResultContainerPlugin results={decodedResults} />
            </section>
        </div>
    )
}

export default Scanner