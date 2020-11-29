import React, { FunctionComponent } from "react";

import { Person } from '../models'

export const PersonComponent: FunctionComponent<Person> = ({name, age, children}) =>
  <div>
    <p>I'm {name} and I'm {age} years old!</p>
    <p>{children}</p>
  </div>
