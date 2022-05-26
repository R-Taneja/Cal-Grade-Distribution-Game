import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

function Home() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="ms-flex-direction-column ms-flex-justify-center ms-flex-align-items-center">
        <button className='ms-btn ms-primary ms-large ms-box-shadow' onClick={() => {setGameState("quiz")}}>Start</button>
    </div>
  )
}

export default Home