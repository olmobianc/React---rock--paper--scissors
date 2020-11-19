import React from "react"

class TryAgain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="try-again-button" onClick={this.props.onClick}>PLAY AGAIN</div>
        )
    }

}

export default TryAgain