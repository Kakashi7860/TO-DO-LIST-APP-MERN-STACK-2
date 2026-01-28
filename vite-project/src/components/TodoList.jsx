function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </>
  );
}

export default TodoList;