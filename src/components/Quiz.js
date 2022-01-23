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
        <div>
            <h1>Quiz</h1>
            {questionElements}
        </div>
    )
}