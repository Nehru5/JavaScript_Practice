import React, { useState } from 'react'

const Toggle = () => {

  const [isVisible, setIsVisible] = useState(true)

  function light(){
    if(isVisible){
      setIsVisible(false)
    }else{
      setIsVisible(true)
    }
  }
  return (
    <>
      <h1>{isVisible && <p>Hello Sarojini</p>}</h1>

      <button onClick={light}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </>
  )
}

export default Toggle