import './styles/App.css';
import React, { useEffect, useState } from 'react';
//import { Weather } from '../components';

function App() {
  const [Weather, setWeatherHTML] = useState('');

  useEffect(() => {
    async function fetchWeather() {
      const html = await Weather();
      setWeatherHTML(html);
    }

    fetchWeather();
  }, []);

  return (
    <div className='App'>
      <nav className="container-fluid navbar bg-primary" data-bs-theme="dark">
        <a className="fs-4 fw-bold ms-2">Template Navbar</a>
      </nav>
      <div className='border border-warning' style={{ display: "inline-flex", height: '90vh'}}>
        <div className="border border-primary" style={{ height: "100%", width: "75vw"}}>
          weather
        </div>
        <div className='' style={{ width: "25vw"}}>
          News
        </div>
      </div>
    </div>
  );
}

export default App;

