import { useCallback, useEffect, useState, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm";
    if (numberAllowed) {
      str += "123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, passwordGenerator, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl text-black">Password Generator</h1>
      <div className="bg-gray-400 p-4 w-1/2 rounded-lg mt-4">
        <div>
          <input
            className="w-[80%] outline-none py-1 text-xl rounded-l-lg pl-2"
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            ref={passRef}
          />
          <button
            className="w-[20%] bg-blue-400 py-1 text-xl hover:bg-blue-500 select-none rounded-r-lg"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <input
            type="range"
            className="cursor-pointer"
            id="one"
            min={8}
            max={30}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="one">Length : {length}</label>
          <div>
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="ml-1 select-none cursor-pointer" htmlFor="numberInput">
              Numbers
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => {
                  return !prev;
                });
              }}
            />
            <label className="ml-1 select-none cursor-pointer" htmlFor="charInput">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
