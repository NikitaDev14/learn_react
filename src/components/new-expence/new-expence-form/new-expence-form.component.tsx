import { FunctionComponent, SyntheticEvent, useState } from "react";
import { NewExpenceFormData } from "../../../models/expence.model";

import './new-expence-form.component.css';

interface PropsType {
  onCancel: () => void;
  onSaveExpenceData: (newExpenceFormData: NewExpenceFormData) => void;
}

export const NewExpenceForm: FunctionComponent<PropsType> = ({ onCancel, onSaveExpenceData }: PropsType) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  const titleChangeHandler = ({target: {value}}: {target: {value: string}}) => {
    setTitle(value);
  };
  
  const amountChangeHandler = ({target: {value}}: {target: {value: string}}) => {
    setAmount(value);
  };
  
  const dateChangeHandler = ({target: {value}}: {target: {value: string}}) => {
    setDate(value);
  };
  
  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    
    const newExpenceItem: NewExpenceFormData = {
      title,
      amount: Number(amount),
      date: new Date(date),
    };
    
    onSaveExpenceData(newExpenceItem);

    setTitle('');
    setAmount('');
    setDate('');
  };
  
  const resetHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    
    onCancel();
  }
  
  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add expence</button>
      </div>
    </form>
  );
}
