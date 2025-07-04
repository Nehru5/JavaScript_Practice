import React, { useState } from 'react'

const StateManagement = () => {
      const [state, setState] = useState(0)
      
      function increment(){
        setState(state+1)
      }
      function decrement(){
        if(state<=0){
          setState(0)
        }else{
          setState(state-1)
        }
      }
      function reset(){
        setState(0)
      }
  return (
    <>
      <h1>{state}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default StateManagement