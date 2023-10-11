import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Loading from './Loading'

const divCss = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'fit-content',
}

function ShowBarcodes() {
  
  const showBarcodesRef = useRef()
  const resultsPerPage = 10
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortedData,setSortedData] = useState([])
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const pageCount = Math.ceil(sortedData.length / resultsPerPage)

  useEffect(() => {
    axios.get('https://efce1xom36.execute-api.ap-south-1.amazonaws.com/dev/dashboard',{headers: {Authorization: localStorage.getItem('token') || "token"}})
      .then((response) => {
        const sorted = response.data.message.slice().sort((a, b) => {
          return new Date(b.timeStamp) - new Date(a.timeStamp)
        })
        setIsLoading(false)
        setSortedData(sorted)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="show-barcodes">
      {isLoading && <Loading style={{ fontSize: '18px' }} />}

      {!isLoading && sortedData.length === 0 && <h3>No Barcodes Found</h3>}

      {sortedData.length > 0 && (
        <div>
          <div style={divCss}>
            <h3>Barcode History : </h3>
            <span style={{ fontSize: '12px' }}>
              Total : {sortedData.length}
            </span>
          </div>
          <div style={{ height: 'fit-content' }} ref={showBarcodesRef}>
            {sortedData.slice(startIndex, endIndex).map((obj, index) => {
              const dateObject = new Date(obj.timeStamp);
              const formattedTime = dateObject.toLocaleTimeString();
              const formattedDate = dateObject.toLocaleDateString('en-GB');
              const weekDay = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
              return (
                <div key={index}>
                  <p>
                    Barcode : {obj.barcode}
                    <br />
                    <span>Scanned On : {formattedDate},{formattedTime},{weekDay}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'inline-block' }}>
            {sortedData.length > resultsPerPage &&
              Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  style={{ margin: '5px' }}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    showBarcodesRef.current.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBarcodes
