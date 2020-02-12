import React, { Component } from 'react';
import './App.css';
import { Person } from './components/person';
import { Person as PersonModel } from './models';

type PersonState = PersonModel[];

export class App extends Component<{}, PersonState> {
  public state: PersonState = [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 },
  ];

  private switchNameHandler() {
    console.log('Clicked!');
  }

  public render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {this.state.map((person: PersonModel) => 
          <Person name={person.name} age={person.age}/>
        )}
      </div>
    );
  }
}
