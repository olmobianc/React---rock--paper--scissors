import React from "react"
import Score from "./Score"

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
                <Score />
            </div>
        </div>
    )
}

export default Header