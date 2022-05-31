import { FunctionComponent, useState } from "react";

import './expence-item.component.css';
import { ExpenceDate } from "../expence-date/expence-date.component";
import { Card } from "../../ui/card/card.component";
import { NewExpenceFormData } from "../../../models/expence.model";

export const ExpenceItem: FunctionComponent<NewExpenceFormData> = (props: NewExpenceFormData) => {
  
  const [title, setTitle] = useState(props.title);
  
  const updateTitle = () => {
    setTitle('Updated!');
  }
  
  return (
    <li>
      <Card className="expense-item">
        <ExpenceDate date={props.date}/>
        <div className="expence-item__description">
          <h2>{title}</h2>
          <div className="expence-item__price">${props.amount}</div>
        </div>
        <button onClick={updateTitle}>Update title</button>
      </Card>
    </li>
  );
};
