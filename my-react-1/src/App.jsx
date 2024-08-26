import Navbar from "./Nav";
import "./App.css";
import Counter from "./Counter";
import Button from "./Button";

function App() {
  return (
    <>
      <Button>Login</Button>
      <Navbar />
      <h1 style={{ backgroundColor: "green" }}> Hello there</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Button>Read More..</Button>
    </>
  );
}

export default App;
