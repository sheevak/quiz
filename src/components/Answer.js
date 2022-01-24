import React from "react"

export default function Answer(props) {

    //Changing the style of the answer if selected
    let styles = {}

    if (props.solution && props.correct) {
        styles = {
            backgroundColor: "#94D7A2",
            border: "none"
        }
    } else if (props.solution && props.selected === props.answerId) {
        styles = {
            backgroundColor: "#F8BCBC",
            border: "none"
        }
    } else if (props.selected === props.answerId) {
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