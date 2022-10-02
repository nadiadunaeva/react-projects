import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the Wrapper</h2>
        <button>Click Me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another Text inside of the Wrapper</h2>
        <input type="text" placeholder="Enter value"></input>
      </Wrapper>
    </div>
  );
}

export default App;
