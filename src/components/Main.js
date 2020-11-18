import React from "react"
import Choice from "./Choice"
import TryAgain from "./TryAgain"

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
            choiceImage: '',
            choiceBorderColor: '',
            choiceExtraBorderColor: '',
            houseChoice: '',
            results:'',
            score: 0,
            setScore: props.setScore
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleTryAgainClick = this.handleTryAgainClick.bind(this)
    }

    /*function that handles the user choice*/
    handleClick = (choiceName, choiceImage, choiceBorderColor, choiceExtraBorderColor) => () => {
        this.setState({
            onScreen: false,
            choiceName,
            choiceImage,
            choiceBorderColor,
            choiceExtraBorderColor,
        })

        /*function that get a random number between 0 and 2, and set this number to the house index*/
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        const index = getRandomInt(3)

        this.setState({
            houseChoice: index
        })

        const results = this.getResults(choiceName, index).toUpperCase()
        this.setState({
            results: results,
        })

        if(results === "WIN") {
            console.log(this.state.score) 
            this.setState((prevState) => {
                return {
                    score: prevState.score + 1 
                }
            })
        } else if (results === "LOSE" && this.state.score > 0) {
            console.log(this.state.score)
            this.setState((prevState) => {
                return {
                    score: prevState.score - 1
                }
            })
        }
        else {
            console.log(this.state.score)
            this.setState((prevState) => {
                return {
                    score: prevState.score
                }
            })
        }
    }

    /*function that get the main logic and the results of the game*/
    getResults(choiceName, houseChoice) {
        if(choiceName === "paper" && houseChoice === 0) {
            return "draw"
        } else if(choiceName === "paper" && houseChoice === 1) {
            return "lose"
        } else if(choiceName === "paper" && houseChoice === 2) {
            return "win"
        }
        if(choiceName === "rock" && houseChoice === 0) {
            return "lose"
        } else if(choiceName === "rock" && houseChoice === 1) {
            return "win"
        } else if(choiceName === "rock" && houseChoice === 2) {
            return "draw"
        }
        if(choiceName === "scissors" && houseChoice === 0) {
            return "win"
        } else if(choiceName === "scissors" && houseChoice === 1) {
            return "draw"
        } else if(choiceName === "scissors" && houseChoice === 2) {
            return "lose"
        }
    }

    /*function that switches the screen and resets the index of the house*/
    handleTryAgainClick() {
        this.setState({
            onScreen: true,
            houseChoice: ''
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
                <div className="result-wrapper" style={{display: (!this.state.onScreen ? "grid" : "none")}}>

                    <div className="user-result-box">
                        <h4 className="result-title">YOU PICKED</h4>
                        <div 
                            className="elem-container result-container"
                            style={{
                                borderColor: this.state.choiceBorderColor, 
                                color: this.state.choiceExtraBorderColor
                            }}
                        >
                            <img src={this.state.choiceImage} className="choice-image" alt="img" />
                        </div>
                    </div>

                    <div className="house-result-box">
                        <h4 className="result-title">THE HOUSE PICKED</h4>

                        {this.state.houseChoice === 0 ? (

                            /*1*/
                            <div 
                                className="elem-container result-container"
                                style={{ 
                                    borderColor:"hsl(230, 89%, 62%)",
                                    color:"hsl(230, 89%, 65%)" 
                                }}
                            >
                                <img src={paper} className="choice-image" alt="img" />
                            </div>

                        ) : ( 

                            this.state.houseChoice === 1 ? (
                            
                            /*2*/
                            <div 
                                className="elem-container result-container"
                                style={{ 
                                    borderColor:"hsl(39, 89%, 49%)", 
                                    color:"hsl(40, 84%, 53%)" 
                                }}
                            >
                                <img src={scissors} className="choice-image" alt="img" />
                            </div>

                        ) : (

                            /*3*/
                            <div 
                                className="elem-container result-container"
                                    style={{ 
                                        borderColor:"hsl(349, 71%, 52%)", 
                                        color:"hsl(349, 70%, 56%)" 
                                    }}
                            >
                                <img src={rock} className="choice-image" alt="img" />
                            </div>
                        ))
                        }

                    </div>
                    <div className="final-result-container">
                    <h1 className="bold">YOU {this.state.results}</h1>
                        <TryAgain onClick={this.handleTryAgainClick}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Main