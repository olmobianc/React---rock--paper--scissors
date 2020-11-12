import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';

let userScore = 12

function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        <Header 
          rock = "ROCK"
          paper = "PAPER"
          scissors = "SCISSORS"
          score = {userScore}
         />
      </div>

      <div className="App-main">
        <Main />
      </div>

      <div className="App-footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
