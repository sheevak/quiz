import React from "react"

export default function Home(props) {
    return (
        <div className="home">
            <h1>Quizzical</h1>
            <h3>Quizzical is a quiz game. Play and see how high a score you can get!</h3>
            <button onClick={props.toggle}>
                Start Quiz
            </button>
        </div>
    )
}