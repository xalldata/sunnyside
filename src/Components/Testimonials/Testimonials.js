import React from 'react'
import './Testimonials.css'
import Emily from '../../assets/image-emily.jpg'
import Tom from '../../assets/image-tom.jpg'
import Thomas from '../../assets/image-thomas.jpg'

function Testimonials() {
    return (
        <div className="testimonials-container">
            <h2>Client testimonials</h2>
            <div className="testimonials-section">
                <div className="testimonial">
                    <img src={Emily} alt="" />
                    <p className="paragraph">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <p className="author">Emily R.</p>
                    <p>Marketing Director</p>
                </div>
                <div className="testimonial">
                    <img src={Tom} alt="" />
                    <p className="paragraph">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <p className="author">Thomas S.</p>
                    <p>Chief Operating Officer</p>
                </div>
                <div className="testimonial">
                    <img src={Thomas} alt="" />
                    <p className="paragraph">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <p className="author">Jennie F.</p>
                    <p>Business Owner</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
