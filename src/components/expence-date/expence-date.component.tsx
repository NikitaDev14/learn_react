import { FunctionComponent } from "react";

import './expence-date.component.css';

interface PropsType {
  date: Date;
}

export const ExpenceDate: FunctionComponent<PropsType> = ({ date }: PropsType) => {
  const month = date.toLocaleString('en-US', {month: "long"});
  const day = date.toLocaleString('en-US', { day: "2-digit" });
  const year = date.getFullYear();
  
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
