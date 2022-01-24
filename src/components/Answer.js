import React from "react"

export default function Answer(props) {
    console.log("Answer:")
    console.log(props)

    //Changing the style of the answer if selected
    let styles = {}
    if (props.selected === props.answerId) {
        styles = {
            backgroundColor: "#D6DBF5",
            border: "none"
        }
    }

    return (
        <h5 onClick={() => props.updateSelectedAnswer(props.questionId, props.answerId)}  className="answer--button" style={styles}>
            {props.answer}
        </h5>
    )
}