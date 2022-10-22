import React from 'react';
// import './Button.css';
import styles from './Button.module.css'

const Button = props => {
  // console.log(styles);
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
      {/* <div className={styles.block}>dwvqevq</div> */}
    </button>
  );
};

export default Button;
