import React, { useEffect, useState } from 'react'

function FetchData() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const FETCHMYDATA=(async()=>{
      const response=await fetch('https://jsonplaceholder.typicode.com/todos');
      const result=await response.json();
      setData(result[0]);
      console.log(data);
            
      
    })

    FETCHMYDATA();
    
  });
  return (
    <div>
      {
        data?.title
      }
    </div>
  )
}

export default FetchData
