import React from 'react'
import './InfoSection.css'
import Egg from '../../assets/desktop/image-transform.jpg'
import Stand from '../../assets/desktop/image-stand-out.jpg'

function InfoSection() {
    return (
        <div id="info-section" className="info-sections">
            <div className="info-grid-section">
                <div className="info-text egg-text">
                    <h2>Transform your <br /> brand</h2>
                    <p> We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <a href="" className="first-learn-more">Learn more</a>
                </div>
                <img src={Egg} alt="" className="info-img egg" />
            </div>
            <div className="info-grid-section">
                <img src={Stand} alt="" className="info-img" />
                <div className="info-text">
                    <h2>Stand out to the right <br /> audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <a href="" className="second-learn-more">Learn more</a>
                </div>
            </div>
            <div className="info-second-grid-section">
                <div className="info-cerise-img">
                    <h3>Graphic design</h3>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
                <div className="info-orange-img">
                    <h3>Photography</h3>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
