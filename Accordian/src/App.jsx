import React from 'react'
import SingleAccord from './Components/SingleAccordian/SingleAccord'
import './App.css'

const details=
  [
  {
    "id": 1,
    "question": "What is React?",
    "answer": "React is a JavaScript library developed by Facebook for building fast and interactive user interfaces using components."
  },
  {
    "id": 2,
    "question": "What is a component in React?",
    "answer": "A component is a reusable, independent piece of UI in React. It can be either a functional component or a class component."
  },
  {
    "id": 3,
    "question": "What is useState in React?",
    "answer": "useState is a React Hook that allows functional components to manage and update state."
  },
  {
    "id": 4,
    "question": "What is JSX?",
    "answer": "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript to describe UI structure."
  }
]

const App = () => {
  return (
    <div>
      <SingleAccord details={details} />
    </div>
  )
}

export default App
