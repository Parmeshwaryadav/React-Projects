import { useState, useRef } from "react";
import Video from "./components/video";

const App = () => {
  console.log("APP Render");
  const [inputTodo, setInputTdo] = useState("");
  const [updateTodo, setUpdateTodo] = useState([]);

  const ref = useRef(null);

  const AddTodo = () => {
    // if (inputTodo !== "") {
    //   setUpdateTodo((curr) => {
    //     return [
    //       ...curr,
    //       {
    //         id: crypto.randomUUID(),
    //         text: inputTodo,
    //       },
    //     ];
    //   });
    // }
    // setInputTdo("");

    console.log(ref);
    ref.current.value = "THIS OS";
  };

  const handleChange = (e) => {
    setInputTdo(e.target.value);
  };

  const handleDelete = (id) => {
    setUpdateTodo((inp) => inp.filter((value) => value.id !== id));
  };
  return (
    <div>
      {/* input + AddTodo */}
      <div>
        {/* <input type="text" onChange={handleChange} value={inputTodo} /> */}
        <input type="text" ref={ref} />

        {ref?.current && ref.current.value}

        <button onClick={AddTodo}>Add Todo</button>
      </div>

      {/* list */}
      <div>
        <ul>
          {updateTodo.map((todo) => (
            <div key={todo.id}>
              <li>{todo.text}</li>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>

      <Video />
    </div>
  );
};

export default App;
