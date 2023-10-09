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
                    return <div key={index}>
                        <p>Barcode : {obj.barcode}</p>
                        <p>Scanned On : {obj.timeStamp}</p>
                    </div>
                })}</div>
            }
        </div>
    )
}

export default ShowBarcodes