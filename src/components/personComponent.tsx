import React, { ChangeEvent, FunctionComponent } from "react";

import { Person } from '../models'
import './personComponent.css'

export const PersonComponent: FunctionComponent<Person & {click: () => void} & {changed: (event: ChangeEvent) => void}> = ({name, age, click, changed, children}) =>
  <div className="Person">
    <p onClick={click}>I'm {name} and I'm {age} years old!</p>
    <p>{children}</p>
    <input type="text" onChange={changed}/>
  </div>
