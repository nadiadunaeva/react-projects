import './App.css';
import Info from './components/Info';

//css rules from Info.module.css doesnt work here
function App() {
  return (
    <div className="App">
      <Info />
      <h1>App component heading</h1>
      <h2>Heading in the App Component</h2>
      <button className="my-button">App component button</button>
    </div>
  );
}

export default App;
