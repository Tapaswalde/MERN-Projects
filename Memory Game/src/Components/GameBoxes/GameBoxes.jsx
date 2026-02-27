import React from "react";
import styles from "./GameBoxes.module.css"

const GameBoxes = ({fruit, onClick}) => {
  return (
    <div className={styles.card} onClick={()=>onClick(fruit)}>
      <span>{fruit.value}</span>
    </div>
  );
};

export default GameBoxes;
