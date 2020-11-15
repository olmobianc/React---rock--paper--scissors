import React from "react"

import rulesImage from "../images/image-rules.svg"

import './Footer.css';

var rulesBox = document.getElementById("rules-image-container")
class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            isVisible: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            isVisible: true
        })
    }

    render() {
        return(
            <div>
                <div id="rules-image-conatinaer" style={{ display: (this.state.isVisible ? "block" : "none")}}>
                    <h2 className="rules-title">RULES</h2>
                    <img src={rulesImage} alt="rules"/>
                </div>
                <div className="footer-box">
                    <div className="footer-container" onClick={this.handleClick}>
                        RULES
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer