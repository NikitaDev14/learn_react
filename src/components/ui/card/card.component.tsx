import React, { FunctionComponent } from "react";

import styles from './card.module.css';

interface PropsType {
  className: string;
  children: React.ReactNode;
}

export const Card: FunctionComponent<PropsType> = ({ className, children }: PropsType) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
};
