import React, { FunctionComponent } from "react";

import mealsImg from '../../assets/meals.jpg';
import styles from './header.module.css';

export const Header: FunctionComponent = () => {
  return (
    <React.Fragment>
      <header>
        <h1 className={styles.header}>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="Full table of dishes" />
      </div>
    </React.Fragment>
  );
}
