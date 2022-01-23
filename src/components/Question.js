import React from "react"
import Answer from "./Answer"
import he from "he"

export default function Question(props) {

    //Making a list of incorrect answers
    const answersObj = [...props.incorrectAnswer].map(el => ({ans: el, correct: false}));

    //Adding the correct answer at a random index
    const index = Math.floor(Math.random()*(answersObj.length+1));
    answersObj.splice(index, 0, {ans: props.correctAnswer, correct: true})

    //Creating Answer components from the list of answers
    const answerElements = answersObj.map((el, ind) => 
        <Answer 
            key={ind}
            questionId={props.questionId}
            answerId={ind}
            answer={he.decode(el.ans)}
            correct={el.correcr}
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