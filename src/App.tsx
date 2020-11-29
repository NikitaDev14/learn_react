import React, { FunctionComponent, useState } from 'react';
import './App.css';
import { PersonComponent } from './components/personComponent';
import { Person as PersonModel } from './models';

interface PersonState {
  persons: PersonModel[];
}

export const App: FunctionComponent = (props) => {
  const [personsState, setPersonsState] = useState<PersonState>({
    persons: [
      { key: '1', name: 'Max', age: 28 },
      { key: '2', name: 'Manu', age: 29 },
      { key: '3', name: 'Stephanie', age: 26 },
    ],
  });
  
  // in function based component 'setState' hook does not merge state, it replaces it!
  const switchNameHandler = () => {
    // console.log('Clicked!');
    setPersonsState({
      persons: [
        { key: '1', name: 'Maximilian', age: 28 },
        { key: '2', name: 'Manu', age: 29 },
        { key: '3', name: 'Stephanie', age: 30 },
      ],
    });
  };
  
  return (
    <div className="App">
      <h1>React App</h1>

      <button onClick={switchNameHandler}>Switch Name</button>

      {personsState.persons.map((person: PersonModel) =>
        <PersonComponent key={person.key} name={person.name} age={person.age}/>
      )}
    </div>
  );
};


