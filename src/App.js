import React from "react"
import Home from "./components/Home"
import Quiz from "./components/Quiz"

export default function App() {

    const [home, setHome] = React.useState(true);
    const [quizQs, setQuizQs] = React.useState("");

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {

                //Merging the correct and incorrect answers into one array
                const dataNew = data.results.map(question => {
                    
                    const allAnswers = [...question.incorrect_answers].map((el, ind) => ({id: ind, ans: el, correct: false}))
                    //randomly inserting the correct answer into the array of incorrect answers.
                    const index = Math.floor(Math.random()*(allAnswers.length+1));
                    allAnswers.splice(index, 0, {id: allAnswers.length, ans: question.correct_answer, correct: true})
                    return {...question, allAnswers: allAnswers}
                });

                setQuizQs(dataNew)
            })
            
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