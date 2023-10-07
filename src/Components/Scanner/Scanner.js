import React,{useState} from 'react'
import Html5QrcodePlugin from './Html5Qr'
import ResultContainer from './Resultcontainer'
import './Css.css'

function Scanner() {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult)
        setDecodedResults(prev => [...prev, decodedResult])
    }
    return (
        <div className="App">
            <section className="App-section">
                <div className="App-section-title"></div>
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainer results={decodedResults} />
            </section>
        </div>
    );
}

export default Scanner