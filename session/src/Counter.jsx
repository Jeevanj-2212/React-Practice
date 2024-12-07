import React, { useState } from 'react'

export default function Counter() {
  let [count,setCount] = useState(0);
  function increase() {
     setCount(count+1);
  }
  function decrement() {
    setCount(count-1);
  }
  return (
    <div>
    <h1>Counter: {count}</h1>
    <button onClick={increase}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
   
  )
}
