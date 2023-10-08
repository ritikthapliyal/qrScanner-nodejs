import React from 'react'
import { useGetBarcodeQuery } from '../store/apis/dashboardApis'

function ShowBarcodes() {
    
    const { data, isLoading, isError, error } = useGetBarcodeQuery()

    return (
        <div className='show-barcodes'>
            {
                isLoading && <>Getting Data...</>
            }
            {
                data && data.message && <div><h3>History :</h3>{data.message.map((obj)=>{
                    return <p>{obj.barcode}</p>
                })}</div>
            }
        </div>
    )
}

export default ShowBarcodes