import { useState } from 'react'
import './App.css'


function App() {
  
  let [counter, setCounter] = useState(0)
  const add = () => { setCounter(counter+1) }
  const subtract = () => { setCounter(counter-1) }
  const reset = () => { setCounter(0) }


  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Counter Program</h2>
          <h2>Counter Value = {counter} </h2>

          <div className="buttonBox">
            <button onClick={add}> Increment </button>
            <button onClick={subtract}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
