import './styles/App.css';
import React from 'react';
import Weather from "../components/Weather.js";
import News from "../components/NewsCard.js";


function App() {
  return (
    <div className='App'>
      <nav className="container-fluid navbar bg-primary" data-bs-theme="dark">
        <a href="/" className="fs-4 fw-bold ms-2">Template Navbar</a>
      </nav>
      <div className='border border-warning' style={{ display: "inline-flex", height: '90vh'}}>
        <div className="border border-primary" style={{ height: "100%", width: "75vw"}}>
          <Weather />
        </div>
        <div className='' style={{ width: "25vw"}}>
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;

