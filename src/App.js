import React from "react"
import Home from "./components/Home"
import Quiz from "./components/Quiz"

export default function App() {

    const [home, setHome] = React.useState(true);
    const [quizQs, setQuizQs] = React.useState("");

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuizQs(data.results))
    }, [])
    function toggleHome() {
        setHome(prevHome => !prevHome)
    }

    return (
        <div className="app-container">
            {home ? <Home toggle={toggleHome}/> : <Quiz  quizQs={quizQs}/>}
        </div>
    )
}