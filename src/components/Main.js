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
                    <Choice 
                        image={paper} 
                        borderColor="hsl(230, 89%, 62%)" 
                        extraBorderColor="hsl(230, 89%, 65%)" 
                    />
                    <Choice 
                        image={scissors} 
                        borderColor="hsl(39, 89%, 49%)" 
                        extraBorderColor="hsl(40, 84%, 53%)" 
                    />
                    <Choice 
                        image={rock} 
                        borderColor="hsl(349, 71%, 52%)" 
                        extraBorderColor="hsl(349, 70%, 56%)" 
                    />
                </div>
            </div>
        )
    }
}

export default Main