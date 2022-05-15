import React from 'react';
import logo from '../logo.svg';
import { CounterComponent } from '../components/counter/counter-component';
import './App.css';
import { ExpenceItem } from "../components/expence-item/expence-item";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterComponent />
        <ExpenceItem />
      </header>
    </div>
  );
}

export default App;
