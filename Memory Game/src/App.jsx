import React,{useState,useEffect, use} from 'react'
import GameHeader from './Components/GameHeader/GameHeader'
import GameBoxes from './Components/GameBoxes/GameBoxes'
import './App.css'


const App = () => {
  const fruits = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥭", "🍒","🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥭", "🍒"];
  const [card,setCard]=React.useState([]);

  const initializeGame=()=>{
    const shuffledFruits=fruits.sort(()=>Math.random()-0.5);

    const finalFruits=shuffledFruits.map((fruit,index)=>{
      return{
        id:index,
        value:fruit,
        isFlipped:false,
        isMatched:false,
      }
    })
    console.log(finalFruits);
    setCard(finalFruits);
  }

  //To initialize the game when the component mounts
  useEffect(()=>{
    initializeGame();
  },[])

  const handleCardClick=(card)=>{
    //Dont allow flipped or matched cards to be do again
    if(card.isFlipped || card.isMatched){
      return;
    }
    const updatedCard=card.map((c)=>{
      if(c.id===card.id){
        return {...c,isFlipped:true};
      }else{
        return c;
      }
    })
    setCard(updatedCard);
  }

  return (
    <div className='container'>
      <GameHeader />
      <div className='game-board'>
        {
          //It is the array of objects with all information about the card, so we will map through it and pass the value to the GameBoxes component
          card.map((fruit,index)=>(
            <GameBoxes key={index} fruit={fruit} onClick={handleCardClick}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
