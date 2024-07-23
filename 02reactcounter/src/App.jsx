import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter >= 20){
      setCounter(counter)
    }
    else{
      counter = counter + 1
      setCounter(counter)
    }
    
  }
  const subValue = () => {
    if (counter <= 0){
      setCounter(counter)
    }
    else{
      counter = counter - 1
      setCounter(counter)
    }  
  }



  return (
    <>
      <h1 className="main-head">Hello Everyone This is My First REACT JS Project</h1>
      <button onClick={subValue}>-</button>
      <h1>Counter : {counter}</h1>
      <button onClick={addValue}>+</button>
    </>
  )
}

export default App
