import { useState, useContext } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';

// https://www.youtube.com/watch?v=8LNb18ibNGs - TUTORIAL

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>quiz</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
