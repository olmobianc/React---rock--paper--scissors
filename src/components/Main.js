import React from "react"
import Choice from "./Choice"

import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="main-container">
                <div className="triangle-container">
                    <Choice />
                </div>
            </div>
        )
    }
}

export default Main