import { useState } from 'react'
function App() {
  let num = 10
  let [counter, setCounter] = useState(num)

  const add = function () {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  const minus = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Namaskaram</h1>
      <h2>Counter Number1 (0 - 20) : {counter}</h2>
      <h2>Counter Number2 (0 - 20) : {counter}</h2>
      <h2>Counter Number3 (0 - 20) : {counter}</h2>

      
      <button onClick={add}>Plus {counter}</button>
      <br />
      <br />
      <button onClick={minus}>Minus {counter}</button>
    </>
  )
}

export default App
