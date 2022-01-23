import React from "react"
import Answer from "./Answer"
import he from "he"

export default function Question(props) {

    const answers = [...props.incorrect]
    answers.push(props.correct)

    const answerElements = answers.map((el, ind) => 
        <Answer 
            key={ind}
            ans={he.decode(el)}
        />)

    return (
        <div>
           <p>{props.question}</p>
           {answerElements}
        </div>
        
    )
}