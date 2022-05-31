import { FunctionComponent } from "react";

import './chart.css';
import { ExpenceChartDataPoint } from "../../../models/expence.model";
import { ChartBar } from "../chart-bar/chart-bar";

interface PropsType {
  dataPoints: ExpenceChartDataPoint[];
}

export const Chart: FunctionComponent<PropsType> = ({ dataPoints }: PropsType) => {
  const dataPointValues: number[] = dataPoints.map((dataPoint: ExpenceChartDataPoint) => dataPoint.value);
  const totalMax: number = Math.max(...dataPointValues);
  
  return (
    <div className='chart'>
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
