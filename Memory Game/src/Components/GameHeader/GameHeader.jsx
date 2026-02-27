import React from 'react'
import styles from './GameHeader.module.css'

const GameHeader = () => {
  return (
    <div className={styles['game-header']}>
      <h1 className={styles['game-title']}>🃏 Card Memory Game</h1>
      <div className={styles['game-moves']}>
        <span>Moves</span><span>0</span>
      </div>
      <div className={styles['game-score']}>
        <span>Score</span><span>0</span>
      </div>
      <button className={styles['reset-btn']}>Reset Game</button>
    </div>
  )
}

export default GameHeader
