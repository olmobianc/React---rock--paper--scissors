import React from "react"

import './Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            image: props.image,
            borderColor: props.borderColor,
            extraBorderColor: props.extraBorderColor
        }
    }

    render() {
        return(
            <div className="elem-box">
                <div 
                    style={{
                        borderColor: this.state.borderColor, 
                        color: this.state.extraBorderColor
                    }} 
                    className="elem-container"
                    onClick={this.props.handleClick(
                        this.state.name,
                        this.state.image, 
                        this.state.borderColor, 
                        this.state.extraBorderColor
                    )}
                >
                    <img src={this.props.image} className="choice-image" alt="img" />
                </div>
            </div>
        )
    }
}

export default Choice