import React from 'react'
import styles from './GameHeader.module.css'

const GameHeader = ({score, initializeGame,moves}) => {
  return (
    <div className={styles['game-header']}>
      <h1 className={styles['game-title']}>🃏 Card Memory Game</h1>
      <div className={styles['game-moves']}>
        <span>Moves</span><span>{moves}</span>
      </div>
      <div className={styles['game-score']}>
        <span>Score</span><span>{score}</span>
      </div>
      <button className={styles['reset-btn']} onClick={initializeGame}>Reset Game</button>
    </div>
  )
}

export default GameHeader
