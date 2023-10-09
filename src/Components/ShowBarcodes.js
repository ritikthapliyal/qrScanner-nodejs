import React, { useState, useEffect } from 'react';
import { useGetBarcodeQuery } from '../store/apis/dashboardApis';
import Loading from './Loading';
const divCss = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'fit-content',
};
function ShowBarcodes() {
  const { data, isLoading } = useGetBarcodeQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;
  const [sortedData, setSortedData] = useState([]);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  };
  const pageCount = Math.ceil(sortedData.length / resultsPerPage);
  useEffect(() => {
    if (data && data.message) {
      // Sort the data by timestamp in descending order
      const sorted = data.message.slice().sort((a, b) => {
        return new Date(b.timeStamp) - new Date(a.timeStamp);
      });
      setSortedData(sorted);
    }
  }, [data]);
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
          <div style={{ height: 'fit-content' }}>
            {sortedData
              .slice(startIndex, endIndex)
              .map((obj, index) => {
                const dateObject = new Date(obj.timeStamp);
                const formattedTime = dateObject.toLocaleTimeString();
                const formattedDate = dateObject.toLocaleDateString('en-GB');
                const weekDay = dateObject.toLocaleDateString('en-US', {
                  weekday: 'long',
                });
                return (
                  <div key={index}>
                    <p>
                      Barcode : {obj.barcode}
                      <br />
                      <span>
                        Scanned On : {formattedDate},{formattedTime},{weekDay}
                      </span>
                    </p>
                  </div>
                );
              })}
          </div>
          <div style={divCss}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Prev
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`pagination-button ${
                  currentPage === index + 1 ? 'active-page' : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === pageCount}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ShowBarcodes