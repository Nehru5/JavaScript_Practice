import React, { useState } from 'react'

const DarkMode = () => {

    const [isVisible, setIsVisible] = useState(true)

    function light(){
      if(isVisible){
        setIsVisible(false)
        document.body.style.backgroundColor = "black"
      }else{
        setIsVisible(true)
        document.body.style.backgroundColor = "white"
      }
    }
  return (
    <>
      <button onClick={light}>Click Me</button>
    
    </>
  )
}

export default DarkMode