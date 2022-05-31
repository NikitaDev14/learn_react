import { FunctionComponent } from "react";

import './chart-bar.css';

interface PropsType {
  value: number;
  maxValue: number;
  label: string;
}

export const ChartBar: FunctionComponent<PropsType> = ({ value, maxValue, label }: PropsType) => {
  let barFillHeight = '0%';
  
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }
  
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};
