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
                    <Choice name="rock" />
                    <Choice name="scissors" />
                    <Choice name="paper" />
                </div>
            </div>
        )
    }
}

export default Main