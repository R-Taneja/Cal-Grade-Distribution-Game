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
    <>
      <img src={Questions[currentQuestion].image} style={{ maxWidth: 800, height: "auto", width: "100%", margin: 25, borderRadius: 25 }} alt="Berkeleytime grade distribution" />
      <div className="ms-btn-group" style={{ marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
        <button className="ms-btn ms-large ms-rounded" onClick={() => setChosenAnswer("A")}>
          {Questions[currentQuestion].optionA}
          </button>
        <button className="ms-btn ms-large ms-rounded" onClick={() => setChosenAnswer("B")}>
          {Questions[currentQuestion].optionB}
          </button>
        <button className="ms-btn ms-large ms-rounded" onClick={() => setChosenAnswer("C")}>
          {Questions[currentQuestion].optionC}
          </button>
        <button className="ms-btn ms-large ms-rounded" onClick={() => setChosenAnswer("D")}>
          {Questions[currentQuestion].optionD}
          </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button className="ms-btn ms-medium" onClick={finishQuiz}>FINISH QUIZ</button>
      ) : (
      <button className="ms-btn ms-medium" onClick={nextQuestion}>NEXT QUESTION</button>
      )}
    </>
  )
}

export default Quiz