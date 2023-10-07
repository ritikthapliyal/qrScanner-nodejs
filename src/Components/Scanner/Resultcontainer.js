import React from 'react'

const ResultContainerTable = ({ data }) => {
    return (
        <table className={'Qrcode-result-table'}>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Decoded Text</td>
                    <td>Format</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((result, i) => {
                        console.log(result);
                        return (<tr key={i}>
                            <td>{i}</td>
                            
                        </tr>);
                    })
                }
            </tbody>
        </table>
    );
}

const ResultContainer = ({decodedResults}) => {
    
    return (
        <div className='Result-container'>
            <div className='Result-section'>
                <ResultContainerTable data={decodedResults} />
            </div>
        </div>
    )
}

export default ResultContainer;