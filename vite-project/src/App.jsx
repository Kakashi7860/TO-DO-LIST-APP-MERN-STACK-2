
import { useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {

  const [todos,setTodos] = useState([]);
  function addTodo(todoText){
    setTodos([...todos,todoText])
  }

  return (
    <>
    <h2>My Todo App</h2>
    <TodoInput addTodo={addTodo}/>
    <TodoList todos={todos}/>

     
    </>
  );
}

export default App;