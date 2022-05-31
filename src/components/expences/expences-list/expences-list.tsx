import './expences-list.css';
import React, { FunctionComponent } from "react";
import * as expenceItemModels from "../../../models/expence.model";
import { ExpenceItem } from "../expence-item/expence-item.component";

interface PropsType {
  items: expenceItemModels.ExpenceItem[];
}

export const ExpencesList: FunctionComponent<PropsType> = ({ items }: PropsType) => {
  
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expences found.</h2>
  }
  
  return (
    <ul className="expenses-list">
      {
        items.map((expence: expenceItemModels.ExpenceItem) => (
          <ExpenceItem
            key={expence.id}
            title={expence.title}
            amount={expence.amount}
            date={expence.date}/>
        ))
      }
    </ul>
  );
};
