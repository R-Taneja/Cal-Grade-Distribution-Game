import { useState, useContext, useEffect } from "react"
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
  const { score, setScore } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");

  // TODO - to make the questions random, just make a function that randomizes the order of the Questions array at the top of this file instead of dealing with multiple arrays to keep track of which questions you've already asked

  useEffect(() => {
    console.log(score); // TODO
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
      <img src={Questions[currentQuestion].image} width={400} alt="" />
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

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>FINISH QUIZ</button>
      ) : (
      <button onClick={nextQuestion}>NEXT QUESTION</button>
      )}
    </div>
  )
}

export default Quiz