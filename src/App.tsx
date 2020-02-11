import React, { Component } from 'react';
import './App.css';
import { Person } from './components/person';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}
