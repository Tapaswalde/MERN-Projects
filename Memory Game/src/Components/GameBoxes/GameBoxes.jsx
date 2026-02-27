import React from "react";
import styles from "./GameBoxes.module.css"

const GameBoxes = ({card, handleCardClick}) => {
  return (
    <div className={styles.card} onClick={()=>handleCardClick(card)}>
      <span>{card.isFlipped || card.isMatched ? card.value : '❓'}</span>
    </div>
  );
};

export default GameBoxes;
