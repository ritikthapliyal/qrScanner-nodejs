import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function filterResults(results) {
    let filteredResults = [];
    return filteredResults;
}
const ResultContainerTable = ({ data }) => {
    const results = filterResults(data);
    console.log("data I am getting", results);
    const navigate = useNavigate();
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