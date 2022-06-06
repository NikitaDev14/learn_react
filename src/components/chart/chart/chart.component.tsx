import { FunctionComponent } from "react";

import styles from './chart.module.css';
import { ExpenceChartDataPoint } from "../../../models/expence.model";
import { ChartBar } from "../chart-bar/chart-bar.component";

interface PropsType {
  dataPoints: ExpenceChartDataPoint[];
}

export const Chart: FunctionComponent<PropsType> = ({ dataPoints }: PropsType) => {
  const dataPointValues: number[] = dataPoints.map((dataPoint: ExpenceChartDataPoint) => dataPoint.value);
  const totalMax: number = Math.max(...dataPointValues);
  
  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint: ExpenceChartDataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
