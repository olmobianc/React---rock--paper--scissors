import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 3
    }
    this.setScore = this.setScore.bind(this)
  }

  /*
  setScore(value) {
    console.log("Value is " + value)
    this.setState({
      score: this.state.score + value
    })
    console.log("the current Score is " + this.state.score)
  }
  */

  setScore(value) {
    console.log("value is "+value)
    if (this.state.score > 0) {
      this.setState({
        score: this.state.score + value
      })
    }
    console.log("your current score is "+this.state.score)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header 
              rock = "ROCK" 
              paper = "PAPER" 
              scissors = "SCISSORS" 
              score = {this.state.score} 
          />
          <Main setScore = {this.setScore}/>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
