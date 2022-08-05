import React from "react";
import boxes from "./Boxes";
import TheBox from "./TheBox";
import "./boxChallenge.css";

/*
 - Challenge that makes use of States
 - Shows how Styles can be applied from within the React file

 - Call with <Name darkMode={boolean} />
*/


export default function Box(props) {
    const [squares, setSquares] = React.useState(boxes);

    const styles = {
        // Have to be camel case
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    const squareElements = squares.map(square => (
        <TheBox key={square.id} on={square.on} />
    ))

    return (
        <div>
            {squareElements}
        </div>
    )
}