import React from "react"
import Question from "./Question"
import he from "he"

export default function Quiz(props) {

    const questionElements = props.quizQs.map((el, ind) => 
        <Question 
            key={ind}
            question={he.decode(el.question)}
            correct={el.correct_answer}
            incorrect={el.incorrect_answers}
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