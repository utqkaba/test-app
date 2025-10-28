import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-extralight bg-gray-900 text-white">
      <h1 className="p-2 mb-4 text-2xl">count: {count}</h1>
      <div className="border border-gray-700 shadow-md shadow-gray-700 rounded-lg p-3 px-6">
        <button
          className="cursor-pointer p-2 px-4 m-4 border border-teal-400 rounded-lg hover:text-gray-400"
          onClick={() => setCount(count + 1)}
        >
          increase
        </button>

        <button
          className="cursor-pointer p-2 px-4 m-4 border border-teal-400 rounded-lg hover:text-gray-400"
          onClick={() => setCount(count - 1)}
        >
          decrease
        </button>

        <button
          className="cursor-pointer p-2 px-4 m-4 border border-teal-400 rounded-lg hover:text-gray-400"
          onClick={() => setCount(0)}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
