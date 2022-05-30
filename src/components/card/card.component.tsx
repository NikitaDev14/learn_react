import React, { FunctionComponent } from "react";

import './card.component.css';

interface PropsType {
  className: string;
  children: React.ReactNode;
}

export const Card: FunctionComponent<PropsType> = ({ className, children }: PropsType) => {
  const classes = `card ${className}`;
  
  return (
    <div className={classes}>{children}</div>
  );
};
