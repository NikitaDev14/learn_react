import React, { FunctionComponent } from "react";

import { Person } from '../models'
import './personComponent.css'

export const PersonComponent: FunctionComponent<Person> = ({name, age, children}) =>
  <div className="Person">
    <p>{children}</p>
    <input type="text"/>
  </div>
