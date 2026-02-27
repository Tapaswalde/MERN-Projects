import React from 'react'
import GameHeader from './Components/GameHeader/GameHeader';
import './App.css'

const App = () => {
  const fruits = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥭", "🍒","🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥭", "🍒"];
  return (
    <div className='container'>
      <GameHeader />
    </div>
  )
}

export default App
