import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

function Home() {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="ms-display-flex ms-flex-direction-column ms-flex-justify-center ms-flex-align-items-center ms-flex-align-content-center">
        <button className='ms-btn ms-primary ms-large ms-box-shadow' onClick={() => {setGameState("quiz")}}>START</button>
    </div>
  )
}

export default Home