import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 12
    }
    this.setScore = this.setScore.bind(this)
  }

  setScore() {
    this.setState((prevState) => {
      return {
        score: prevState.score + 1
      }
    })
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
          <Main setScore = {this.state.setScore}/>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
