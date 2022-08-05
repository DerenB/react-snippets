import React from "react";
import Header from "./navbar/Header";
import Squares from "./ComponentLibrary/BoxesChallenge/BoxChallengeMain";

const App = () => {
    return (
        <>
            <Header />
            <Squares darkMode={false} />
        </>
    )
}

export default App;