export interface Person extends Identifiable {
  name: string;
  age: number;
}

export interface Identifiable {
  key: string;
}
