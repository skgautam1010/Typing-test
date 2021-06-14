import React from 'react'
import logo from "./../Assets/logo.png";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">TypingTest</p>
            </div>

            <div className="nav-right">
                <a target="_blank"
                    className="nav-link"
                    href="https://www.linkedin.com/in/sonukumargautam"
                    rel="noreferrer">LINKEDIN</a>
            </div>
        </div>
    )
}

export default Nav;
