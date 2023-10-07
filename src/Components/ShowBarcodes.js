import React from 'react'
import { useGetBarcodeQuery } from '../store/apis/dashboardApis'

function ShowBarcodes() {
    
    const { data, isLoading, isError, error } = useGetBarcodeQuery()
    
    if(isLoading || isLoading){
        return <>Getting Barcodes....</>
    }

    console.log(data)

    return (
        <div>xxx</div>
    )
}

export default ShowBarcodes