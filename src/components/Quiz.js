import React from "react"
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min"
import Question from "./Question"

export default function Quiz(props) {
    const questionElements = props.quizQs.map((el, ind) => 
        <Question 
            key={ind}
            question={el.question}
            correct={el.correct_answer}
            incorrect={el.incorrect_answers}
        />)

    return (
        <div>
            <h1>Quiz</h1>
            {questionElements}
        </div>
    )
}