import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text === "") return;
    addTodo(text);
    setText("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default TodoInput;