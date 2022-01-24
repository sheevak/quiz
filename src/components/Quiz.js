import React from "react"
import Question from "./Question"
import he from "he"

export default function Quiz(props) {
    //console.log(props)

    //Tracks the selected answer for each question
    const [selectedAnswer, setSelectedAnswer] = React.useState({});
    const [solution, setSolution] = React.useState(false);
    const [score, setScore] = React.useState(0);

    //Updates selectedAnswer
    function updateSelectedAnswer(questionId, answerId) {
        setSelectedAnswer(prevSelected => {
            return {...prevSelected, [questionId]: answerId}
        })
    }

    //Checks all the answers
    function checkAnswers() {
        let count = 0;
        props.quizQs.forEach((question, ind) => {
            //if the selected answer is correct then the count variable is increased.
            if (question.allAnswers[selectedAnswer[ind]].correct) {
                count++
            }
        });
        setScore(count)
        setSolution(true);
    }

    //resets the game
    function restart() {
        setSolution(false);
        setSelectedAnswer({})
        props.restartGame()
        props.toggle()
    }

    //Creating Question components from the list of questions
    const questionElements = props.quizQs.map((el, ind) => 
        <Question 
            key={ind}
            questionId={ind}
            question={he.decode(el.question)}

            allAnswers={el.allAnswers}
            correctAnswer={el.correct_answer}
            incorrectAnswer={el.incorrect_answers}

            updateSelectedAnswer={updateSelectedAnswer}
            selectedAnswer={selectedAnswer[ind]}

            solution={solution}
        />
    )

    return (
        <div className="quiz--container">
            {questionElements}
            <button onClick={solution ? restart : checkAnswers} className="check-button">
                {solution ? "Restart" : "Check Answers"}
            </button>
            {/* {solution && <h2>Score: {score}</h2>} */}
        </div>

    )
}