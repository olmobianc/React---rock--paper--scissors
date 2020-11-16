import React from "react"

import './Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            borderColor: props.borderColor,
            extraBorderColor: props.extraBorderColor
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.state.name)
    }

    render() {
        return(
            <div className="elem-box">
                <div 
                    style={{borderColor: this.state.borderColor, color: this.state.extraBorderColor}} 
                    className="elem-container"
                    onClick={this.handleClick}
                >
                    <img src={this.props.image} className="choice-image" alt="img" />
                </div>
            </div>
        )
    }
}

export default Choice