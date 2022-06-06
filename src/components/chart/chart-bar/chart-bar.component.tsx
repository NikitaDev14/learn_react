import { FunctionComponent } from "react";

import styles from './chart-bar.module.css';

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
    <div className={styles['chart-bar']}>
      <div className={styles['chart-bar__inner']}>
        <div className={styles['chart-bar__fill']} style={{height: barFillHeight}}></div>
      </div>
      <div className={styles['chart-bar__label']}>{label}</div>
    </div>
  );
};
