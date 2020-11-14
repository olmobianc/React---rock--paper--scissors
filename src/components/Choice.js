import React from "react"

import './Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            borderColor: props.borderColor,
            extraBorderColor: props.extraBorderColor
        }
    }
    render() {
        return(
            <div className="elem-box">
                <div style={{borderColor: this.state.borderColor, color: this.state.extraBorderColor}} className="elem-container">
                    <img src={this.props.image} />
                </div>
            </div>
        )
    }
}

export default Choice