import './App.css';
import Map from './components/Map';
import React from 'react';
import { locations } from './components/MarkerData';


function App() {
  return (
    <div className="App">
      <Map location={locations}></Map>
    </div>
  );
}

export default App;
