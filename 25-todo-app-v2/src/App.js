import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

import './App.css';

function App() {
  const [todosTask, setTodosTask] = useState([]);

  //обработчик добавления новой задачи
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(), // id generator
    };
    console.log(newTodo);
    setTodosTask([...todosTask, newTodo]); //todo is Object
  };

  //удаление задачи
  const deleteTodoHandler = (id) => {
    setTodosTask(todosTask.filter((todo) => todo.id !== id)); //comparing id's
  };

  //toggle task completed/uncompleted
  const toggleTodoHandler = (id) => {
    setTodosTask(
      todosTask.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };
  // reset -  empty array
  const resetTodoHandler = () => {
    setTodosTask([]);
  };

  //удаление только завершенных задач
  const deleteCompletedTodosHandler = () => {
    setTodosTask(todosTask.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todosTask.filter(
    (todo) => todo.isCompleted
  ).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {todosTask.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount} //convert to logic operator !!
          resetTodos={resetTodoHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todosTask={todosTask}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }!`}</h2>
      )}
    </div>
  );
}

export default App;
