import React from "react"
import './Header.css';

function Header(props) {
    return(
        <div className="nav-container">
            <div className="title-container">
                {props.rock} <br></br>
                {props.paper} <br></br>
                {props.scissors}

            </div>
            <div className="score-container">
                <div className="score-text">SCORE</div>
                <div className="score-value">{props.score}</div>
            </div>
        </div>
    )
}

export default Header