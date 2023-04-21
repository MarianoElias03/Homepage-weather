import './styles/App.css';
import React from 'react';
import Weather from "../components/Weather.js";
import News from "../components/NewsCard.js";


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div><Weather /></div>
        <div><News /></div>
      </div>
    </div>
  );
}

export default App;

