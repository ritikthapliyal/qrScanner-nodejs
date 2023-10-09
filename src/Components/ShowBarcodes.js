import React, { useState, useEffect } from 'react'
import { useGetBarcodeQuery } from '../store/apis/dashboardApis'
import Loading from './Loading'

const divCss = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'fit-content',
}

const paginationDivCss = {
    display:"inline-block"
}


function ShowBarcodes() {

    const { data, isLoading } = useGetBarcodeQuery()
    const [currentPage, setCurrentPage] = useState(1)
    const resultsPerPage = 6
    const [sortedData, setSortedData] = useState([])
    const startIndex = (currentPage - 1) * resultsPerPage
    const endIndex = startIndex + resultsPerPage
    
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    
    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const pageCount = Math.ceil(sortedData.length / resultsPerPage)
    
    
    useEffect(() => {
        if (data && data.message) {
            const sorted = data.message.slice().sort((a, b) => {
                return new Date(b.timeStamp) - new Date(a.timeStamp)
            })
            setSortedData(sorted)
        }
    }, [data])

    return (
    <div className='show-barcodes'>
    
        {isLoading && <Loading style={{ fontSize: '18px' }} />}
    
        {sortedData.length > 0 && (
            
            <div>

                <div style={divCss}>
                    <h3>Barcode History : </h3>
                    <span style={{ fontSize: '12px' }}>
                    Total : {sortedData.length}
                    </span>
                </div>

                <div style={{ height: 'fit-content' }}>{
                    sortedData.slice(startIndex, endIndex).map((obj, index) => {
                        const dateObject = new Date(obj.timeStamp)
                        const formattedTime = dateObject.toLocaleTimeString()
                        const formattedDate = dateObject.toLocaleDateString('en-GB')
                        const weekDay = dateObject.toLocaleDateString('en-US', {weekday: 'long'})
                        return (
                            <div key={index}>
                                <p>
                                Barcode : {obj.barcode}
                                <br />
                                <span>Scanned On : {formattedDate},{formattedTime},{weekDay}</span>
                                </p>
                            </div>
                        )})}
                </div>

            <div style={paginationDivCss}>
                
                {/* <button onClick={handlePrevPage} 
                        style={{margin:"5px",marginLeft:0}}>Prev</button> */}
                
                {
                    Array.from({ length: pageCount }, (_, index) => (
                        <button  style={{margin : "5px"}} key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>))
                }
                
                {/* <button onClick={handleNextPage} 
                        style={{margin:"5px",marginRight:0}}>Next</button> */}

            </div>
            </div>
        )}
    </div>
)}


export default ShowBarcodes