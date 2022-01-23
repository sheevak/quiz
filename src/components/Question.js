import React from "react"
import Answer from "./Answer"
import he from "he"

export default function Question(props) {

    //Making a list of all answers
    const answers = [...props.incorrectAnswer]
    answers.push(props.correctAnswer)

    //Creating Answer components from the list of answers
    const answerElements = answers.map((el, ind) => 
        <Answer 
            key={ind}
            questionId={props.questionId}
            answerId={ind}
            answer={he.decode(el)}
            selected={props.selectedAnswer}
            updateSelectedAnswer={props.updateSelectedAnswer}
        />)

    return (
        <div>
           <h3 className="question">{props.question}</h3>
           <div className="answer--container">
                {answerElements}
           </div>
           
           <hr className="question--divider"/>
        </div>
        
    )
}