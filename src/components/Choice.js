import React from "react"

import './Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <div className="elem-container">
                    <img src={this.props.name} />
                </div>
            </div>
        )
    }
}

export default Choice