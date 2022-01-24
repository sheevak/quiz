import React from "react"
import Answer from "./Answer"
import he from "he"

export default function Question(props) {

    //Creating Answer components from the list of answers
    const answerElements = props.allAnswers.map((el, ind) => 
        <Answer 
            key={ind}
            answerId={ind}
            questionId={props.questionId}
            answer={he.decode(el.ans)}
            correct={el.correct}
            selected={props.selectedAnswer}
            updateSelectedAnswer={props.updateSelectedAnswer}
            solution={props.solution}
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