import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A dev URL in action. Isn't Coder awesome?
        </p>
        <a
          className="App-link"
          href="https://coder.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Coder!
        </a>
      </header>
    </div>
  );
}

export default App;
