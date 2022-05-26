import { useState } from 'react';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <div className='ms-display-flex ms-flex-direction-column ms-flex-justify-center ms-flex-align-items-center ms-flex-align-content-center'>
      <p style={{ marginBottom: 0 }}>UC BERKELEY</p>
      <h1 style={{maxWidth: 800, marginLeft: 25, marginRight: 25, marginBottom: 25, textAlign: "center"}}>GUESS THE GRADE DISTRIBUTION</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "home" && <Home />}
        {gameState === "quiz" && <Quiz />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
