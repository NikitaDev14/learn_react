import { Identifiable } from "./common";

export interface PersonModel extends Identifiable {
  name: string;
  age: number;
}
