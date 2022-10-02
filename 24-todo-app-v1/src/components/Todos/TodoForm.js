import { useState } from 'react'; // делаем поле ввода и добавляем его в состояние
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState(' ');

  const onSubmitHandler = (event) => {
    event.preventDefault(); //убираем переход на новую странцу при сабмите формы
    addTodo(text);
    setText(''); //setText изменяет состояние TodoForm путем изменения text
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter New Todo"
          value={text}
          onChange={(e) => setText(e.target.value)} //передаем знач из формы в вызов
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
