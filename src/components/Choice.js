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
                    <div className="choice-elem"></div>
                </div>
            </div>
        )
    }
}

export default Choice