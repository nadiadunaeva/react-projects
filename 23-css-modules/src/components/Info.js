import './Info.css';
import styles from './Info.module.css'; // avalilable only on this component

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info Component</h1>
      <h2>Heading in the Info Component</h2>
      <button className="my-button">Click Me In the Info Component</button>
      <button className={styles.myOtherButton}>
        Click Me In the Info Component
      </button>
    </div>
  );
}
export default Info;
