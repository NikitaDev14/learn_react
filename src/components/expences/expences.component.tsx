import React, { FunctionComponent, useState } from "react";

import * as expenceItemModels from "../../models/expence.model";
import { ExpenceItem } from "../expence-item/expence.item.component";
import './expences.component.css';
import { Card } from "../card/card.component";
import { ExpencesFilter } from "../expences-filter/expences-filter";

interface PropsType {
  items: expenceItemModels.ExpenceItem[];
}

export const Expences: FunctionComponent<PropsType> = ({ items }: PropsType) => {
  const [filter, setFilter] = useState('');
  
  const changeFilterHandler = (filterValue: string) => {
    setFilter(filterValue);
  };
  
  return (
    <div>
      <Card className="expenses">
        <ExpencesFilter
          selected={filter}
          onChangeFilterHandler={changeFilterHandler}/>
        
        {
          items.map((expence: expenceItemModels.ExpenceItem) => (
            <ExpenceItem
              key={expence.id}
              title={expence.title}
              amount={expence.amount}
              date={expence.date}/>
          ))
        }
        
      </Card>
    </div>
  );
};
