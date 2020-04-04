import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Привет мир!</h1>
        <p>
          Edit <code>src/App.js</code> React готов к работе
        </p>
        <h1> Изменения !!!!!!!!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main> Добавление Main

      <article>
          <aside> ASIDE</aside>
        Добавление   ARTICLE
          <div className="body">
              Content
          </div>
      </article>


      </main>
        <footer> Добавил Footer </footer>
    </div>
  );
}

export default App;
