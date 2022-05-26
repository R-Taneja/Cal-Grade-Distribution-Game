import { useState, useContext, useEffect } from "react"
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
  const { score, setScore } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");

  useEffect(() => {
    console.log(score);
  }, [score]);

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === chosenAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === chosenAnswer) {
      setScore(score + 1);
    }
    // TODO: Finish the quiz
  }

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="answers">
        <button onClick={() => setChosenAnswer("A")}>
          {Questions[currentQuestion].optionA}
          </button>
        <button onClick={() => setChosenAnswer("B")}>
          {Questions[currentQuestion].optionB}
          </button>
        <button onClick={() => setChosenAnswer("C")}>
          {Questions[currentQuestion].optionC}
          </button>
        <button onClick={() => setChosenAnswer("D")}>
          {Questions[currentQuestion].optionD}
          </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
      <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  )
}

export default Quiz