import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  function btnInc() {
    setCount(count + 1);
  }
  return (
    <div className="box">
      <p>{count}</p>
      <Button onClick={btnInc} >
        Click me
      </Button>
    </div>
  );
}
