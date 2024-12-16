import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0)
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>
      <h1>Counter: {count}</h1>

    <div className="btn-area" style={{display:"flex",gap:"2vw",alignItems:"center",margin:"5vh 0"}}>
     <button style={{padding:"2vw"}} onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button style={{padding:"2vw"}} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      </div>
      
    </div>
  )
}

export default Counter
