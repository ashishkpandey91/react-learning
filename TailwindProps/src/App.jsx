import Card from "./components/card";
import "./App.css";

function App() {
  let user = {
    name: "Ashish",
    title: "Yo YO ...",
  };

  return (
    <>
      <div className="w-screen h-full bg-gray-300 ">
        <h1 className="text-white p-5 bg-blue-700 rounded-lg w-full mb-4 text-center">
          Tailwind Test
        </h1>
        <Card name="Yo Yo ..." titlee="Makhna nnnnnna" userVar={user} />
      </div>
    </>
  );
}

export default App;
// rfce
