import React from "react";

import "./styles.css";

function Result(props) {
    if (props.correct === null) {
        return (
            <div className="result">
                <div className="spans">
                    <span className="startgame">
                        Try to click on an image that you haven't before. The
                        images will shuffle after you click.
                    </span>
                    <span className="quote">"Aren't they cute?."</span>
                </div>
            </div>
        );
    } else if (props.correct === "win") {
        return (
            <div className="result">
                <div className="spans">
                    <span className="win">You win!</span>
                    <span className="quote">"You got them all!"</span>
                    <span>Click an image to play again!</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="result">
                {props.correct ? (
                    <div className="spans">
                        <span className="correct">Correct!</span>
                        <span className="quote">
                            "Good guess!"
                        </span>
                    </div>
                ) : (
                    <div className="spans">
                        <span className="wrong">Try again</span>
                        <span className="quote">
                            "How could you click on the same one, none of them even look the same."
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default Result;