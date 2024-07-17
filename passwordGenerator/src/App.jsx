import { useState, useCallback, useEffect , useRef } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8); // length of the password Generator
  const [numberAllowed, setNumberAllowed] = useState(false); //numbers should be allowed in password generator
  const [charAllowed, setCharAllowed] = useState(false); //special characters should be allowed in password generator
  const [password, setPassword] = useState(""); // password should be set in password generator,so leave it empty

  // use Ref Hook

  const passwordRef = useRef(null);

  // use Ref Hook


  {/* use Call back is used to optimize the code and memorize the code i.e to be present in cache */}

  const passwordGenerator = useCallback(() => { 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  
  {/*  copy to clipboard code */}
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  } , [password])
  {/*  copy to clipboard code */}

  useEffect(() => {
    passwordGenerator()
  } , [length , numberAllowed , charAllowed , passwordGenerator])

  
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          {/* Range Input */}

          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"  
            id="length"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>

          {/* Range Input */}

          {/* Numbers Allowed Input */}

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Numbers Allowed Input */}

          {/* Characters Allowed Input */}                    

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {charAllowed}
            id="charInput"
            onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

          {/* Characters Allowed Input */}                    



        </div>
      </div>
    </>
  );
}

export default App;
