import { Identifiable } from "./common.model";

export interface NewExpenceFormData {
  title: string;
  amount: number;
  date: Date;
}

export interface ExpenceItem extends NewExpenceFormData, Identifiable {}
