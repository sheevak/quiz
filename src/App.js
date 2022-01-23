import React from "react"
import Home from "./components/Home"
import Quiz from "./components/Quiz"

export default function App() {

    const [home, setHome] = React.useState(true)

    function toggleHome() {
        setHome(prevHome => !prevHome)
    }

    return (
        <div className="container">
            {home ? <Home toggle={toggleHome}/> : <Quiz />}
        </div>
    )
}