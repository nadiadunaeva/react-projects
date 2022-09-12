const App = (props) => {
  const { initialButtonText, initialClassesList } = props;
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassesList);

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('yellow-btn');
  };

  return (
    <div className="btn-align">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('react-app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click Me" initialClassesList="" />);
