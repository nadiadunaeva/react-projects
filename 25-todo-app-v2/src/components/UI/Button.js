import styles from './Button.module.css';
//универсальный компонент кнопки
//children - то что внутри кнопку
function Button(props) {
  const { onClick, children, title, disabled = false } = props;
  return (
    <button
      {...props}
      className={styles.button} //styles
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
