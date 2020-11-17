import React from "react"
import "./Score.css"

class Score extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }
    render() {
        return(
            <div>
                <div className="score-text">SCORE</div>
                <div className="score-value">{this.state.score}</div>
            </div>    
        )
    }
}

export default Score