import React, { FunctionComponent, useState } from "react";

import * as expenceItemModels from "../../../models/expence.model";
import './expences.component.css';
import { Card } from "../../ui/card/card.component";
import { ExpencesFilter } from "../expences-filter/expences-filter";
import { ExpencesList } from "../expences-list/expences-list";
import { ExpencesChart } from "../expences-chart/expences-chart";

interface PropsType {
  items: expenceItemModels.ExpenceItem[];
}

export const Expences: FunctionComponent<PropsType> = ({ items }: PropsType) => {
  const [filter, setFilter] = useState('');
  
  const changeFilterHandler = (filterValue: string) => {
    setFilter(filterValue);
  };
  
  const filteredExpences: expenceItemModels.ExpenceItem[] = items.filter((expenceItem: expenceItemModels.ExpenceItem) => {
    return expenceItem.date.getFullYear().toString() === filter;
  });
  
  return (
    <Card className="expenses">
      <ExpencesFilter
        selected={filter}
        onChangeFilterHandler={changeFilterHandler}/>
      <ExpencesChart expences={filteredExpences}/>
      <ExpencesList items={filteredExpences}/>
    </Card>
  );
};
