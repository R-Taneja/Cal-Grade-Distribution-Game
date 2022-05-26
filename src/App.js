import { useState } from 'react';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';

// https://www.youtube.com/watch?v=8LNb18ibNGs - TUTORIAL

function App() {
  const [gameState, setGameState] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>BERKELEYTIME GRADE DISTRIBUTION QUIZ</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "home" && <Home />}
        {gameState === "quiz" && <Quiz />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
