import React, { useState } from 'react';

const index = () => {
  const [data,setData] = useState([])
   const handleGetData = async ()=>{
    const res = await fetch("/api/products")
    const products = await res.json()
    setData(products)
  }
  return (
    <div>
      <button onClick={handleGetData}>Get Data</button>
      <ul>
        {data.map(d=>(
          <li key={d.title}>{d.title}-{d.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default index;