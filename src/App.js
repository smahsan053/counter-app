import Counter from "./components/Counter";
import Trails from "./components/Trails";
function App() {
  return (
    <div className="bg-black flex flex-row justify-evenly items-center w-full h-screen">
      <div className="w-1/2 max-w-md">
        <Counter />
      </div>

      <div className="w-1/2 max-w-lg h-[640px] overflow-hidden">
        <Trails />
      </div>
    </div>
  );
}

export default App;
