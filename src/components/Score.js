import React from "react"
import "./Score.css"

class Score extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>
                <div className="score-text">SCORE</div>
                <div className="score-value">12</div>
            </div>    
        )
    }
}

export default Score