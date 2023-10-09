import React, { useState } from 'react';
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

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='show-barcodes'>
      {isLoading && <Loading style={{ fontSize: '18px' }} />}
      {data && data.message && (
        <div>
          <div style={divCss}>
            <h3>Barcode History : </h3>
            <span style={{ fontSize: '12px' }}>
              Total : {data && data.message ? data.message.length : '0'}
            </span>
          </div>

          <div style={{ height: 'fit-content' }}>
            {data.message
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
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <span>{currentPage}</span>
            <button
              onClick={handleNextPage}
              disabled={!data.message || endIndex >= data.message.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBarcodes;
