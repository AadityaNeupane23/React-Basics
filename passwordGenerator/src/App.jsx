import { useState , useCallback , useEffect , useRef} from "react";
import "./App.css";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
 
    //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+{}[]|:;'<>,.?/~`"

    for(let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },
    [length, numberAllowed, charAllowed,setPassword])


  const copy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])



   return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl shadow-2xl bg-[#4198bb] text-white p-6">

        
        <h1 className="text-2xl font-bold text-center text-[#ffffff] mb-6">
          Password Generator
        </h1>

        
        <div className="flex overflow-hidden rounded-lg border border-gray-700 mb-5">
          <input
            type="text"
            ref={passwordRef}
            value={password}
            readOnly
            placeholder="Password"
            className="w-full px-3 py-2 bg-gray-800 text-white outline-none"
          />

          <button
            onClick={copy}
            className="bg-cyan-500 hover:bg-cyan-600 transition px-4 text-sm font-semibold"
          >
            Copy
          </button>
        </div>


        <div className="space-y-4 text-sm">

          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label className="text-white">Length</label>
              <span className="text-white">{length}</span>
            </div>

            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer accent-cyan-500"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>


          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="accent-cyan-500"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="accent-cyan-500"
            />
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
