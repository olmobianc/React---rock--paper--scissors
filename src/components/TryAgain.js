import React from "react"

class TryAgain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="try-again-button" onClick={this.props.onClick}>TRY AGAIN</div>
        )
    }

}

export default TryAgain