import logo from './logo.svg';
import './App.css';

function App() {
  const message = 'Learn React';

  const getGreetingMessage = (name) => {
    if (name === 'jce') return `Hello, ${name}! Learn React`;
    return `Welcome, ${name}! Learn React`;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. hi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          {getGreetingMessage('ad')}
        </a>
      </header>
      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <lavel htmlFor="agreement-el">동의</lavel>
    </div>
  );
}

export default App;
