import React from "react"
import Header from "./components/Header"

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
    </div>
  );
}

export default App;
