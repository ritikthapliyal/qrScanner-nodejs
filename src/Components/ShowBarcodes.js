import React,{useEffect} from 'react'
import { useGetBarcodeQuery } from '../store/apis/dashboardApis'
import Loading from './Loading'
import { useLocation } from 'react-router-dom'

function ShowBarcodes() {
    
    const location = useLocation()
    const random = location.state || 0
    const { data, isLoading, isError, error } = useGetBarcodeQuery()

    useEffect(() => {
    }, [random])

    return (
        <div className='show-barcodes'>
            {
                isLoading && <Loading style={{fontSize : "18px"}}/>
            }
            {
                data && data.message && <div><h3>History :</h3>{data.message.map((obj,index)=>{
                    return <p key={index}>{obj.barcode}</p>
                })}</div>
            }
        </div>
    )
}

export default ShowBarcodes