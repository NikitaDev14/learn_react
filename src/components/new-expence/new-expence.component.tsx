import { FunctionComponent } from "react";

import './new-expence.component.css';
import { NewExpenceForm } from "../new-expence-form/new-expence-form.component";
import { ExpenceItem, NewExpenceFormData } from "../../models/expence.model";

interface PropsType {
  onAddExpence: (newExpence: ExpenceItem) => void;
}

export const NewExpence: FunctionComponent<PropsType> = ({ onAddExpence }: PropsType) => {
  const saveExpenceDataHandler = (newExpenceFormData: NewExpenceFormData) => {
    const newExpence: ExpenceItem = {
      ...newExpenceFormData,
      id: new Date().getTime().toString(),
    };

    onAddExpence(newExpence);
  };

  return (
    <div className="new-expense">
      <NewExpenceForm onSaveExpenceData={saveExpenceDataHandler} />
    </div>
  );
};
