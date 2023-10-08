import { useGetBarcodeQuery } from '../store/apis/dashboardApis'
import Loading from './Loading'

function ShowBarcodes() {
    
    const { data, isLoading } = useGetBarcodeQuery()

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