import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') //delayed operation after return
      .then((response) => response.json()) // convert to json
      .then((json) => setTodo(json)); //изменяем состояние Апп с помощью setTodo
  }, []);

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>; //показываем если
  //todo !=null
}

export default App;
