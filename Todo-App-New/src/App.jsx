import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");
  const [updateTodo, setUpdateTodo] = useState([]);

  const handleClickTodo = () => {
    if (inputData !== "") {
      setUpdateTodo((prevTodo) => [...prevTodo, inputData]);
      setInputData("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        />
        <button onClick={handleClickTodo}>Add Todo</button>
      </div>

      <div>
        <ul>
          {updateTodo.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
