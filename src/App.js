import React from 'react';
import DestinationShowcase from './components/DestinationShowcase/DestinationShowcase';
import MilesCalculator from './components/MilesCalculator/MilesCalculator';
import './styles/App.css';

function App() {
  return (
    <div>
      <MilesCalculator />
      <DestinationShowcase />
    </div>
  );
}

export default App;
