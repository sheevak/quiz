import React from "react"
import Question from "./Question"
import he from "he"

export default function Quiz(props) {

    //Tracks the selected answer for each question
    const [selectedAnswer, setSelectedAnswer] = React.useState({1: "", 2: "", 3: "", 4: "", 5: ""});

    //Updates selectedAnswer
    function updateSelectedAnswer(questionId, answerId) {
        setSelectedAnswer(prevSelected => {
            return {...prevSelected, [questionId]: answerId}
        })
    }

    //Creating Question components from the list of questions
    const questionElements = props.quizQs.map((el, ind) => 
        <Question 
            key={ind}
            questionId={ind}
            question={he.decode(el.question)}
            correctAnswer={el.correct_answer}
            incorrectAnswer={el.incorrect_answers}
            updateSelectedAnswer={updateSelectedAnswer}
            selectedAnswer={selectedAnswer[ind]}
        />
    )

    return (
        <div className="quiz--container">
            {questionElements}
            <button className="check-button">
                Check Answers
            </button>
        </div>

    )
}