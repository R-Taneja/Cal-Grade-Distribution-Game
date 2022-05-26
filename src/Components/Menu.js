import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

function Menu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
        <button onClick={() => {setGameState("quiz")}}>Start</button>
    </div>
  )
}

export default Menu