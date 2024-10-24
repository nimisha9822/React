import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(8)
  // let counter = 8;
  const add=() =>{
    console.log("Value added" , count);
    setCount(count++);
  }

  const remove=() =>{
    console.log("Value removed" , count);
    setCount(count--)
  }

  return (
    <>
   <h1>Nimisha Kesarwani</h1>
   <h3>Counter Value : {count}</h3>
   <button onClick={add}>Add Value</button>
   <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App
