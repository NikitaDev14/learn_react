import React, { useState } from 'react';

import { ExpenceItem } from "../models/expence.model";
import { Expences } from "../components/expences/expences.component";
import { NewExpence } from "../components/new-expence/new-expence.component";

const DUMMY_EXPENCES: ReadonlyArray<ExpenceItem> = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];

function App() {
  const [expences, setExpences] = useState([...DUMMY_EXPENCES]);

  const addExpenceHandler = (newExpence: ExpenceItem) => {
    setExpences((prevState: ExpenceItem[]) => {
      return [
        ...prevState,
        newExpence,
      ];
    });
  }
  
  return (
    <div>
      <NewExpence onAddExpence={addExpenceHandler}/>
      <Expences items={expences}/>
    </div>
  );
}

export default App;
