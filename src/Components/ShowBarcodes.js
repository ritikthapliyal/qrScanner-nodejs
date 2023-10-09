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


                    //date time calculate
                    const dateObject = new Date(date)

                    const formattedTime = dateObject.toLocaleTimeString()
                    const formattedDate = dateObject.toLocaleDateString('en-GB')
                    const weekDay = dateObject.toLocaleDateString('en-US', { weekday: 'long' })

                    return <div key={index}>
                        <p>Barcode : {obj.barcode}</p>
                        <p>Scanned On : {formattedDate},{formattedTime},{weekDay}</p>
                    </div>
                })}</div>
            }
        </div>
    )
}

export default ShowBarcodes