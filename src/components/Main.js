import React from "react"
import Choice from "./Choice"
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'

import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="main-container">
                <div className="triangle-container">
                    <Choice name={paper} />
                    <Choice name={scissors} />
                    <Choice name={rock} />
                </div>
            </div>
        )
    }
}

export default Main