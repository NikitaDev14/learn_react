import React, { Component } from 'react';
import './App.css';
import { PersonComponent } from './components/personComponent';
import { Person as PersonModel } from './models';

interface PersonState {
  persons: PersonModel[];
}

export class App extends Component<{}, PersonState> {
  public state: PersonState = {
    persons: [
      { key: '1', name: 'Max', age: 28 },
      { key: '2', name: 'Manu', age: 29 },
      { key: '3', name: 'Stephanie', age: 26 },
    ],
  };

  private switchNameHandler = () => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        { key: '1', name: 'Maximilian', age: 28 },
        { key: '2', name: 'Manu', age: 29 },
        { key: '3', name: 'Stephanie', age: 27 },
      ],
    });
  };

  public render() {
    return (
      <div className="App">
        <h1>React App</h1>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        {this.state.persons.map((person: PersonModel) =>
          <PersonComponent key={person.key} name={person.name} age={person.age}/>
        )}
      </div>
    );
  }
}
