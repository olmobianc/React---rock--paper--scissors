import React from "react"

import rulesImage from "../images/image-rules.svg"
import iconClose from "../images/icon-close.svg"

import './Footer.css';

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            isVisible: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        })
    }

    render() {
        return(
            <div>
                <div id="rules-image-conatinaer" style={{ display: (this.state.isVisible ? "block" : "none")}}>
                    <div className="rules-title-container">
                        <h2 className="rules-title">RULES</h2>
                        <img src={iconClose} alt="close-icon" className="close-icon" onClick={this.handleClick} />
                    </div>
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