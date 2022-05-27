import { QuizContext } from '../Helpers/Contexts';
import { useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';

function EndScreen() {
  const { score } = useContext(QuizContext);

  return (
    <p><b>SCORE:</b> <mark>{score}/{Questions.length}</mark></p>
  )
}

export default EndScreen