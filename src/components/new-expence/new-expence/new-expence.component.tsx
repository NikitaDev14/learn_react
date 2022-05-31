import { FunctionComponent, useState } from "react";

import './new-expence.component.css';
import { NewExpenceForm } from "../new-expence-form/new-expence-form.component";
import { ExpenceItem, NewExpenceFormData } from "../../../models/expence.model";

interface PropsType {
  onAddExpence: (newExpence: ExpenceItem) => void;
}

export const NewExpence: FunctionComponent<PropsType> = ({ onAddExpence }: PropsType) => {
  const [isFormVisible, setFormVisible] = useState(false);
  
  const saveExpenceDataHandler = (newExpenceFormData: NewExpenceFormData) => {
    const newExpence: ExpenceItem = {
      ...newExpenceFormData,
      id: new Date().getTime().toString(),
    };

    onAddExpence(newExpence);
    setFormVisible(false);
  };
  
  const showForm = () => {
    setFormVisible(true);
  };
  
  const hideForm = () => {
    setFormVisible(false);
  }
  
  let content = <button onClick={showForm}>Add New Expence</button>;
  
  if (isFormVisible) {
    content = <NewExpenceForm onCancel={hideForm} onSaveExpenceData={saveExpenceDataHandler} />;
  }

  return (
    <div className="new-expense">
      {content}
    </div>
  );
};
