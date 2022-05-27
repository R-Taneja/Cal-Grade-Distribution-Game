import { useState, useContext, useEffect } from "react"
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
  const { score, setScore } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [answerAChosen, setAnswerAChosen] = useState(false);
  const [answerBChosen, setAnswerBChosen] = useState(false);
  const [answerCChosen, setAnswerCChosen] = useState(false);
  const [answerDChosen, setAnswerDChosen] = useState(false);
  const [questions, setQuestions] = useState(Questions);
  const [isLoading, setIsLoading] = useState(true);

  const shuffleArray = arr => {
    const shuffledArray = arr.slice()
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[rand]] = [shuffledArray[rand], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    setQuestions(shuffleArray(questions));
  }, [score]);

  const nextQuestion = () => {
    if (chosenAnswer === "") {
      alert("Please choose an answer");
    } else {
      if (questions[currentQuestion].answer === chosenAnswer) {
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
      setAnswerAChosen(false);
      setAnswerBChosen(false);
      setAnswerCChosen(false);
      setAnswerDChosen(false);
      setIsLoading(true);
    }
  }

  const finishQuiz = () => {
    if (questions[currentQuestion].answer === chosenAnswer) {
      setScore(score + 1);
    }
    // TODO: Finish the quiz
  }

  const handleAnswer = (answer) => {
    setChosenAnswer(answer);
    if (answer === "A") {
      setAnswerAChosen(true);
      setAnswerBChosen(false);
      setAnswerCChosen(false);
      setAnswerDChosen(false);
    } else if (answer === "B") {
      setAnswerAChosen(false);
      setAnswerBChosen(true);
      setAnswerCChosen(false);
      setAnswerDChosen(false);
    } else if (answer === "C") {
      setAnswerAChosen(false);
      setAnswerBChosen(false);
      setAnswerCChosen(true);
      setAnswerDChosen(false);
    } else if (answer === "D") {
      setAnswerAChosen(false);
      setAnswerBChosen(false);
      setAnswerCChosen(false);
      setAnswerDChosen(true);
    }
  }

  return (
    <>
      <div style={{display: isLoading ? "block" : "none"}}>
        <div style={{ maxWidth: 800, minHeight: 300, width: "100%", margin: 25}}>
          <div className="ms-loading ms-primary"></div>
        </div>
      </div>
      <div style={{display: isLoading ? "none" : "block"}}>
        <img onLoad={() => setIsLoading(false)} src={questions[currentQuestion].image} style={{ maxWidth: 800, height: "auto", width: "100%", marginBottom: 25, borderRadius: 25 }} alt="Berkeleytime grade distribution" />
      </div>
      <div className="ms-btn-group" style={{ marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
        <button className={`ms-btn ms-rounded ${answerAChosen ? "ms-primary" : ""}`} onClick={() => handleAnswer("A")}>
          {questions[currentQuestion].optionA}
          </button>
        <button className={`ms-btn ms-rounded ${answerBChosen ? "ms-primary" : ""}`} onClick={() => handleAnswer("B")}>
          {questions[currentQuestion].optionB}
          </button>
        <button className={`ms-btn ms-rounded ${answerCChosen ? "ms-primary" : ""}`} onClick={() => handleAnswer("C")}>
          {questions[currentQuestion].optionC}
          </button>
        <button className={`ms-btn ms-rounded ${answerDChosen ? "ms-primary" : ""}`} onClick={() => handleAnswer("D")}>
          {questions[currentQuestion].optionD}
          </button>
      </div>

      {currentQuestion === questions.length - 1 ? (
        <button className="ms-btn ms-medium" onClick={finishQuiz}>VIEW SCORE</button>
      ) : (
      <button className="ms-btn ms-medium" onClick={nextQuestion}>NEXT</button>
      )}

      <div className="ms-progress" style={{ maxWidth: 800, marginTop: 25, marginBottom: 25 }}>
        <div className="ms-progress-fill" style={{ width: `${(score/questions.length) * 100}%` }}>{score}</div>
      </div>
    </>
  )
}

export default Quiz