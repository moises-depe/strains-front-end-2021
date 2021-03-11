import React, { Component } from 'react'
import './AboutUsPage.css';


export default class AboutUsPage extends Component {
    render() {
        return (
            <>
                <p className="about-info-head">About Us</p>

                <div className="about-us-page">

                    <div className="about-info">
                        <p className="about-name">Brandon Perard</p>
                        <p className="profession">Software Developer</p>
                        <div className='b-rad-image about-image'></div>
                        <p className="about-paragraph">brandon ........</p>
                        <div className="about-link">
                            <a href="http://www.linkedin.com/in/swemoisesdepena/" target="_blank" rel="noopener noreferrer">
                                <div className='li-icon'></div>
                            </a>
                        </div>
                    </div>



                    <div className="about-info">
                        <p className="about-name">Casey Warren</p>
                        <p className="profession">Software Developer</p>
                        <div className='casey-image about-image'></div>
                        <p className="about-paragraph"> Casey spends her time outdoors whenever she can. </p>
                        <div className="about-link">
                            <a href="https://www.linkedin.com/in/casey-maynah-warren/" target="_blank" rel="noopener noreferrer">
                                <div className='li-icon'></div>
                            </a>
                        </div>
                    </div>


                    <div className="about-info">
                        <p className="about-name">Moises Depena</p>
                        <p className="profession">Software Developer</p>
                        <div className='moises-image about-image'></div>
                        <p className="about-paragraph">Moises ........</p>
                        <div className="about-link">
                            <a href="http://www.linkedin.com/in/swemoisesdepena/" target="_blank" rel="noopener noreferrer">
                                <div className='li-icon'></div>
                            </a>
                        </div>
                    </div>

                    <div className="about-info">
                        <p className="about-name">Parker Sequeira</p>
                        <p className="profession">Software Developer</p>
                        <div className='parker-image about-image'></div>
                        <p className="about-paragraph">I am a Full-Stack Developer from Salem OR. </p>
                        <div className="about-link">
                            <a href="https://www.linkedin.com/in/parker-sequeira/" target="_blank" rel="noopener noreferrer">
                                <div className='li-icon'></div>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

