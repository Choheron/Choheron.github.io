import logo from './ruhro.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Matt <code>"Angelo"</code> Crouse is very stinky poopy and does not vibe.
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Autism"
          target="_blank"
          rel="noopener noreferrer"
        >
          See why He is so Smelly!
        </a>
      </header>
    </div>
  );
}

export default App;
