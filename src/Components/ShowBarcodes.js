import React, { useEffect, useState } from 'react';
import { useGetBarcodeQuery } from '../store/apis/dashboardApis';
import Loading from './Loading';

function ShowBarcodes() {
  const [latestData, setLatestData] = useState(null);

  const { data, isLoading, isError, error } = useGetBarcodeQuery();

  useEffect(() => {
    if (data && data.message) {
      setLatestData(data.message);
    }
  }, [data]);

  return (
    <div className="show-barcodes">
      {isLoading && <Loading style={{ fontSize: '18px' }} />}
      {latestData && (
        <div>
          <h3>History:</h3>
          {latestData.map((obj,index) => {
            return <p key={index}>{obj.barcode}</p>
          })}
        </div>
      )}
    </div>
  )
}

export default ShowBarcodes;
