import React from "react"
import Answer from "./Answer"
import he from "he"

export default function Question(props) {
    console.log("Question:")
    console.log(props)

    //Creating Answer components from the list of answers
    const answerElements = props.allAnswers.map((el) => 
        <Answer 
            key={el.id}
            answerId={el.id}
            questionId={props.questionId}
            answer={he.decode(el.ans)}
            correct={el.correct}
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