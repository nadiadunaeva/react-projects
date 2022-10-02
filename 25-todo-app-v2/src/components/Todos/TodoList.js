import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todosTask, deleteTodo, toggleTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todosTask.length && <h2>Todo list is empty!</h2>}
      {todosTask.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
// выполняем итерацию по массиву строк с этом К, массив получаем в виде св-ва todosTask
//
