import React, { useState } from 'react'
import './Hero.css'
import logo from '../../assets/logo.svg'
import hamburgerLogo from '../../assets/icon-hamburger.svg'
import arrowDown from '../../assets/icon-arrow-down.svg'

function Hero() {

    const [hamburger, setHamburger] = useState(true)

    const handleHamburger = () => {
        setHamburger(!hamburger)
    }

    return (
        <div>
            <div className="hero-section">
                <header>
                    <nav>
                        <img src={logo} alt="logo" />
                        <div className="menu-container">
                            <img src={hamburgerLogo} alt="hamburger" className="hamburger" onClick={handleHamburger} />
                            <ul className={hamburger ? "hide" : ""}>
                                <div className="arrow-right"></div>
                                <li><a href="">About</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Projects</a></li>
                                <li className="contact"><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <a href="#info-section"><img src={arrowDown} alt="" className="arrow-down" /></a>
                <h1>We are creatives</h1>
            </div>
        </div>
    )
}

export default Hero
