import React from "react"

export default function Home(props) {
    return (
        <div className="home">
            <h1 className="home--header">Quizzical</h1>
            <h3 className="home--description">Quizzical is a quiz game. Play and see how high a score you can get!</h3>
            <button onClick={props.toggle} className="home--start">
                Start Quiz
            </button>
        </div>
    )
}