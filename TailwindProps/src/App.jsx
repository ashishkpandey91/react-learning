import Card from "./components/card";

function App() {
  let user = {
    name: "Banrakash aadmi",
    title: "Yo YO ...",
  };

  return (
    <>
      <div className="w-screen h-full bg-gray-300 p-4 flex flex-wrap gap-3">
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
