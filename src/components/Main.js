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
            victory: false,
            loss: false,
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
            houseChoice: 4
        })
                
        /*function that get a random number between 0 and 2*/
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        
        /*function that get set the random number to the house index (with delay!)*/
        this.sleep(1000).then(() => {
            const index = getRandomInt(3)
            this.setState({
                houseChoice: index
            })
            const results = this.getResults(choiceName, index).toUpperCase()
            this.setState({
                results: results,
            })

            /*****************calling setScore()********************/
            if(results === "WIN") {
                this.props.setScore(1)
            } else if (results === "LOSE") {
                this.props.setScore(-1)
            }
            else {
                this.props.setScore(0)
            }
        })
    }

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

    /*function that get the main logic and the results of the game*/
    getResults(choiceName, houseChoice) {
        if(choiceName === "paper" && houseChoice === 0) {
            return "draw"
        } else if(choiceName === "paper" && houseChoice === 1) {
            this.setState({
                loss: true
            })
            return "lose"
        } else if(choiceName === "paper" && houseChoice === 2) {
            this.setState({
                victory: true
            })
            return "win"
        }
        if(choiceName === "rock" && houseChoice === 0) {
            this.setState({
                loss: true
            })
            return "lose"
        } else if(choiceName === "rock" && houseChoice === 1) {
            this.setState({
                victory: true
            })
            return "win"
        } else if(choiceName === "rock" && houseChoice === 2) {
            return "draw"
        }
        if(choiceName === "scissors" && houseChoice === 0) {
            this.setState({
                victory: true
            })
            return "win"
        } else if(choiceName === "scissors" && houseChoice === 1) {
            return "draw"
        } else if(choiceName === "scissors" && houseChoice === 2) {
            this.setState({
                loss: true
            })
            return "lose"
        }
    }

    /*function that switches the screen and resets the index of the house*/
    handleTryAgainClick() {
        this.setState({
            onScreen: true,
            houseChoice: '',
            victory: false,
            loss: false
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
                            id={
                                (
                                    this.state.choiceName === "paper" ||
                                    this.state.choiceName === "rock" ||
                                    this.state.choiceName === "scissors"
                                ) 
                                && 
                                    this.state.victory ? "extra-shadows" : ""}
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
                        
                        {/************ starting the conditional rendering  **************/}
                        {this.state.houseChoice === 0 ? (

                            /*1*/
                            <div
                                id={
                                        this.state.houseChoice === 0
                                    && 
                                        this.state.loss ? "extra-shadows" : ""}
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
                                id={
                                    this.state.houseChoice === 1
                                && 
                                    this.state.loss ? "extra-shadows" : ""}
                                className="elem-container result-container"
                                style={{ 
                                    borderColor:"hsl(39, 89%, 49%)", 
                                    color:"hsl(40, 84%, 53%)" 
                                }}
                            >
                                <img src={scissors} className="choice-image" alt="img" />
                            </div>

                        ) : this.state.houseChoice === 2 ? (

                            /*3*/
                            <div 
                                id={
                                    this.state.houseChoice === 2
                                && 
                                    this.state.loss ? "extra-shadows" : ""}
                                className="elem-container result-container"
                                    style={{ 
                                        borderColor:"hsl(349, 71%, 52%)", 
                                        color:"hsl(349, 70%, 56%)" 
                                    }}
                            >
                                <img src={rock} className="choice-image" alt="img" />
                            </div>
                        ) : null)
                        }

                    </div>
                    {this.state.houseChoice === 4 ? 
                        <div className="final-result-container">THE HOUSE IS PICKING...</div> 
                        : (
                        <div className="final-result-container">
                            <h1 className="bold">YOU {this.state.results}</h1>
                            <TryAgain onClick={this.handleTryAgainClick}/>
                        </div>
                    )}
                </div>
            </div>

        )
    }
}

export default Main