import React from "react"
import Score from "./Score"

import './Header.css';

function Header(props) {
    return(
        <div className="nav-container">
            <div className="title-container">
                <h1 className="no-margin">
                    {props.rock} <br></br>
                    {props.paper} <br></br>
                    {props.scissors}
                </h1>    
            </div>
            <div className="score-container">
                <Score score={props.score}/>
            </div>
        </div>
    )
}

export default Header