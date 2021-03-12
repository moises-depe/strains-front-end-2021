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
                        <p className="about-paragraph">Brandon lives, works, and plays in Portland, OR. If you need to find him, the best place to look is on the dodgeball court, on the kickball field, or at karaoke.<br></br><span className="about-favorite">Favorite Cannabis Pseudonym: Unicorn Hair</span> </p>
                        <div className="about-link">
                            <a href="https://www.linkedin.com/in/brandonperard/" target="_blank" rel="noopener noreferrer">
                                <div className='li-icon'></div>
                            </a>
                        </div>
                    </div>



                    <div className="about-info">
                        <p className="about-name">Casey Warren</p>
                        <p className="profession">Software Developer</p>
                        <div className='casey-image about-image'></div>
                        <p className="about-paragraph"> Casey is from Kalamazoo, Michigan. She spends her time outdoors whenever she can. <br></br> <span className="about-favorite">Favorite Cannabis Pseudonym:</span> Flower </p>
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
                        <p className="about-paragraph">Moises is from Yamhill, Oregon. He spends most of his time traveling, being a father and husband.<br></br><span className="about-favorite">Favorite Cannabis Pseudonym:</span> Gas</p>
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
                        <p className="about-paragraph">Parker is a Full-Stack Developer from Salem OR. In his free time he enjoys playing soccer and going rock climbing. <br></br><span className="about-favorite">Favorite Cannabis Pseudonym:</span> Electric Lettuce</p>
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

