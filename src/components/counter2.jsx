import React from 'react'
import { useCounterStore } from '../zustand/counterStore';

function Counter2() {
    const count=useCounterStore((state)=>state.count);
    const Increment=useCounterStore((state)=>state.increment);
    const Decrement=useCounterStore((state)=>state.decrement);
    const Reset=useCounterStore((state)=>state.reset);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>
      <h1>Counter: {count}</h1>

    <div className="btn-area" style={{display:"flex",gap:"2vw",alignItems:"center",margin:"5vh 0"}}>
     <button style={{padding:"2vw"}} onClick={Increment}>
        Increment
      </button>

      <button style={{padding:"2vw"}} onClick={Decrement}>
        Decrement
      </button>
      
      <button style={{padding:"2vw"}} onClick={Reset}>
        Reset
      </button>
      </div>
      
    </div>
  )
}

export default Counter2;
