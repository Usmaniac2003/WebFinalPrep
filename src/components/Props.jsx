import React from 'react'

const Card=({name,rollno,department,age="20"})=>{
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Roll No.: {rollno}</p>
            <p>Department: {department}</p>
            <p>Age: {age}</p>
        </div>
    )
}

function CardDisplay() {
  return (
    <div>
<Card name="John Doe" rollno="12345" department="Computer Science"/>
              
    </div>
  )
}


export default CardDisplay
