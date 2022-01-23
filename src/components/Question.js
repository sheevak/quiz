import React from "react"
import Answer from "./Answer"

export default function Question(props) {
    
    const answers = [...props.incorrect]
    answers.push(props.correct)

    const answerElements = answers.map((el, ind) => 
        <Answer 
            key={ind}
            ans={el}
        />)

    return (
        <div>
           <p>{props.question}</p>
           {answerElements}
        </div>
        
    )
}