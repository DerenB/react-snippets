import React from "react";
import Header from "./navbar/Header";
import Squares from "./ComponentLibrary/BoxesChallenge/BoxChallengeMain";
import ClockMain from "./ComponentLibrary/Clock/ClockMain";

const App = () => {
    return (
        <>
            <Header />
            <Squares darkMode={false} />
            <ClockMain isPrecise={false} />
        </>
    )
}

export default App;