import { FunctionComponent } from "react";

import './expences-filter.css';

interface PropsType {
  selected: string;
  onChangeFilterHandler: (newFilterValue: string) => void;
}

export const ExpencesFilter: FunctionComponent<PropsType> = ({selected, onChangeFilterHandler }: PropsType) => {
  const changeYearHandler = ({target: {value}}: {target: {value: string}}) => {
    onChangeFilterHandler(value);
  };
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={changeYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}
