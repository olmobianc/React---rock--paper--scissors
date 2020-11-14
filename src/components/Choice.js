import React from "react"

import paper from '../images/icon-paper.svg'
import './Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <div className="elem-container">
                <img src={paper} />
                </div>
            </div>
        )
    }
}

export default Choice