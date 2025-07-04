import React, { useState } from 'react'

const InputHandling = () => {
    const [name, setName] = useState("")
    
    
  return (
      <>
      <h1>Enter Name: {name} </h1>
        <input
         type="text" 
         onChange={(e)=>{
              setName(e.target.value)
         }} 
          />

      </>
  )
}

export default InputHandling