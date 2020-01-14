import React from 'react'
import './styles.css'

function Header(props) {
    return (
        <header>
                <div className="title">Matt's Animals</div>
                <div className="scoreboard">Score: {props.score} | Top Score: {props.topScore}</div>
        </header>

    )
}

export default Header