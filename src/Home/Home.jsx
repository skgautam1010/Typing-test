import React from 'react'
import './Home.css';
import hero from "./../Assets/hero.png";
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can You Type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img data-aos="fade-left" className="flash-image" src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Home;