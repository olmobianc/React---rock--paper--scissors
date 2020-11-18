import React from "react"

class Score extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div className="score-text">SCORE</div>
                <div className="score-value">{this.props.score}</div>
            </div>    
        )
    }
}

export default Score