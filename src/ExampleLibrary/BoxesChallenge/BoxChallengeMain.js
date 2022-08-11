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

    function toggle(id) {
        // Version 1:
        /*
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
        */

        // Version 2:
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                // Looks at each square in the map
                // If the ID matches, returns the square with the same properties except for "on"
                return square.id === id ? {...square, on: !square.on} : square
            })
        }) 
    }

    const squareElements = squares.map(square => (
        <TheBox 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))

    return (
        <div>
            {squareElements}
        </div>
    )
}