import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    //ternarny - additional css class
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)} //delete task by unique id
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)} //меняем состояние с конкретным id
      />
    </div>
  );
}

export default Todo;
