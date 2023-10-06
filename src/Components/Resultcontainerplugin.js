import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function filterResults(results) {
    let filteredResults = [];
    return filteredResults;
}
const ResultContainerTable = ({ data }) => {
    const results = filterResults(data);
    console.log("data I am getting", results);
    const navigate = useNavigate();
    const postData = {
        username: 'tanya',
        barcode: results
    };
    useEffect(() => {
        axios.post('https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev/postData', postData)
            .then(response => {
                console.log('POST Request Response:', response.data);
                if (response.data.message) {
                    navigate('/dashboard');
                }
            })
            .catch(error => {
                console.error('POST Request Error:', error);
            });
    }, [results, navigate]);
    return (
        <table className={'Qrcode-result-table'}>
            <tbody>
                {
                    results.map((result, i) => {
                        console.log(result);
                        return (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{result.decodedText}</td>
                                <td>{result.result.format.formatName}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};
export default ResultContainerTable;