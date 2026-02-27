import React,{useState,useEffect, use} from 'react'
import GameHeader from './Components/GameHeader/GameHeader'
import GameBoxes from './Components/GameBoxes/GameBoxes'
import './App.css'


const App = () => {
  const fruits = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥭", "🍒","🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥭", "🍒"];

  //Imp states to handle 
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);

  //Let's initalize the game 
  const initializeGame = () => {
    //Shuffled the fruits array 
    const shuffledFruits=fruits.sort(()=>Math.random()-0.5);
    //adding additional info 
    const finalFruits=shuffledFruits.map((fruit,index)=>{
      return{
        id:index,
        value:fruit,
        isMatched:false,
        isFlipped:false
      }
    })
    setCards(finalFruits);
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
  }


  //Hanlde card click
   const handleCardClick = (card) => {
    if (disabled) return;
    if (card.isFlipped || card.isMatched) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );

    setCards(updatedCards);

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setDisabled(true);
      setMoves((prev) => prev + 1);
    }
  };


    useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.value === secondCard.value) {
        // MATCH
        setCards((prev) =>
          prev.map((card) =>
            card.value === firstCard.value
              ? { ...card, isMatched: true }
              : card
          )
        );
        resetTurn();
      } else {
        // NOT MATCH
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          resetTurn();
        }, 800);
      }
    }
  }, [secondCard]);


    const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };




  //To initialize the game when the component mounts
  useEffect(()=>{
    initializeGame();
  },[])

  
  

  return (
    <div className='container'>
      <GameHeader />
      <div className='game-board'>
        {
          cards.map((card)=>(
            <GameBoxes key={card.id} card={card} handleCardClick={handleCardClick}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
