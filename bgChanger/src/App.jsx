import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("white")
  const colors = ["red","blue","green","yellow","purple", "pink", "cyan", "orange","white","black"]

  return (
    <>
      <div className=" w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">


            {colors.map((clr) => (

              <button
                key={clr}
                onClick={() => setColor(clr)}
                className={`outline-none px-4 py-1 rounded-full shadow-lg text-white`}
                style={{ backgroundColor: clr }}>
                {clr}
            </button>

          ))}
            

          </div>
        </div>
    </div>
    </>
  )
}

export default App

//    Alternate:  <button onClick={() => setColor("red")} 
//                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
//                style={{backgroundColor:"red"}}> Red
//                </button>
