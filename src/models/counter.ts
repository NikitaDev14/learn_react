import { LOADING_STATUS } from "./common";

export interface CounterState {
  value: number;
  status: LOADING_STATUS;
}

export const initialCounterState: CounterState = {
  value: 0,
  status: LOADING_STATUS.Idle,
};
