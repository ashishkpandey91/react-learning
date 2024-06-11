import { useState } from "react";
function App() {
  const [length, setLength] = useState(8);
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
          />
          <button className="w-[20%] bg-blue-400 py-1 text-xl hover:bg-blue-500 select-none rounded-r-lg">
            Copy
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <input
            type="range"
            className="cursor-pointer"
            id="one"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="one">Length : {length}</label>
          <div>
            <input type="checkbox" id="numberInput" />
            <label className="ml-1" htmlFor="numberInput">Numbers</label>
          </div>
          <div>
            <input type="checkbox" id="charInput" />
            <label className="ml-1" htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
