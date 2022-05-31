import { FunctionComponent } from "react";
import { Chart } from "../../chart/chart/chart";
import { ExpenceChartDataPoint, ExpenceItem } from "../../../models/expence.model";

interface PropsType {
  expences: ExpenceItem[];
}

export const ExpencesChart: FunctionComponent<PropsType> = ({ expences }: PropsType) => {
  const chartDataPoints: ExpenceChartDataPoint[] = [
    { id: 'Jan', label: 'Jan', value: 0},
    { id: 'Feb', label: 'Feb', value: 0},
    { id: 'Mar', label: 'Mar', value: 0},
    { id: 'Apr', label: 'Apr', value: 0},
    { id: 'May', label: 'May', value: 0},
    { id: 'Jun', label: 'Jun', value: 0},
    { id: 'Jul', label: 'Jul', value: 0},
    { id: 'Aug', label: 'Aug', value: 0},
    { id: 'Sep', label: 'Sep', value: 0},
    { id: 'Okt', label: 'Okt', value: 0},
    { id: 'Nov', label: 'Nov', value: 0},
    { id: 'Dec', label: 'Dec', value: 0},
  ];
  
  expences.forEach((expence: ExpenceItem) => {
    const expenceMonth = expence.date.getMonth();
    
    chartDataPoints[expenceMonth].value += expence.amount;
  });
  
  return (
    <Chart dataPoints={chartDataPoints}/>
  );
};
