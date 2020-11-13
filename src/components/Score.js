import React from "react"

class Score extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>
                <div className="score-text">SCORE</div>
                <div className="score-value">0</div>
            </div>    
        )
    }
}

export default Score