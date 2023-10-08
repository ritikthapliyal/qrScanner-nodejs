import { useGetBarcodeQuery } from '../store/apis/dashboardApis'
import Loading from './Loading'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'

function ShowBarcodes() {
    
    const { data, isLoading } = useGetBarcodeQuery()
    const {shouldRefresh} = useSelector((state) => state.authSlice)
    const [refreshKey, setRefreshKey] = useState(0)
    
    useEffect(() => {
      
      setRefreshKey((prevKey) => prevKey + 1);
    }, [shouldRefresh]);

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