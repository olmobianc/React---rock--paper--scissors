import React from "react"
import Choice from "./Choice"

import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'

import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onScreen: true,
            choiceName: '',
            choiceBorderColor: '',
            choiceExtraBorderColor: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (choiceName, choiceBorderColor, choiceExtraBorderColor) => () => {
        this.setState({
            onScreen: false,
            choiceName,
            choiceBorderColor,
            choiceExtraBorderColor,
        })
    }

    render() {
        return(
            <div>
                {/*HOME PAGE*/}
                <div className="main-container" style={{display: (this.state.onScreen ? "block" : "none")}}>
                    <div className="triangle-container">
                        <div onClick={this.handleClick}>
                            <Choice
                                name="paper"
                                image={paper} 
                                borderColor="hsl(230, 89%, 62%)" 
                                extraBorderColor="hsl(230, 89%, 65%)"
                                handleClick={this.handleClick}
                            />
                        </div>
                        <div onClick={this.handleClick}>
                            <Choice
                                name="scissors"
                                image={scissors} 
                                borderColor="hsl(39, 89%, 49%)" 
                                extraBorderColor="hsl(40, 84%, 53%)"
                                handleClick={this.handleClick}
                            />
                        </div>
                        <div style={{gridArea: "bottom"}} onClick={this.handleClick}>
                            <Choice 
                                name="rock"
                                image={rock} 
                                borderColor="hsl(349, 71%, 52%)" 
                                extraBorderColor="hsl(349, 70%, 56%)"
                                handleClick={this.handleClick}
                            />
                        </div>    
                    </div>
                </div>

                {/*RESULT PAGE*/}
                <div className="result-wrapper">
                    <div className="user-result-box">
                        <h4 className="result-title">YOU PICKED</h4>
                        <div 
                            className="elem-container result-container"
                            style={{display: (!this.state.onScreen ? "flex" : "none"), 
                            borderColor: this.state.choiceBorderColor, 
                            color: this.state.choiceExtraBorderColor}}
                        >
                            <img src={this.state.choiceName} className="choice-image" alt="img" />
                        </div>
                    </div>
                    <div className="house-result-box">
                        <h4 className="result-title">THE HOUSE PICKED</h4>
                        <div 
                            className="elem-container result-container"
                            style={{display: (!this.state.onScreen ? "flex" : "none"), 
                            borderColor: this.state.choiceBorderColor, 
                            color: this.state.choiceExtraBorderColor}}
                        >
                            <img src={this.state.choiceName} className="choice-image" alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Main