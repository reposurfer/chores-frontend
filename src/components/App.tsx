import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5013/WeatherForecast')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
