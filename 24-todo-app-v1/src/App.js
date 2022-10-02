import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

import './App.css';

function App() {
  const [todosTask, setTodosTask] = useState([]);

  //обработчик добавления новой задачи
  const addTodoHandler = (text) => {
    setTodosTask([...todosTask, text]);
  };
  //удаление задачи
  const deleteTodoHandler = (index) => {
    setTodosTask(todosTask.filter((todo, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todosTask={todosTask} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
