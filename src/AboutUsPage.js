import React, { Component } from 'react'
import './AboutUsPage.css';


export default class AboutUsPage extends Component {
    render() {
        return (
            <>
                <div className="about-info">
                    <h1 className="about-team-name">Strain Selectors</h1>
                </div>
                <div className="about-us-page"></div>
                <div className="about-info">
                    <h3>Brandon Perard</h3>
                    <div className='b-rad-image about-image'></div>
                    <p className="about-paragraph">brandon ........</p>
                </div>
                <div className="about-link">
                    <a href="http://www.linkedin.com/in/swemoisesdepena/" target="_blank" rel="noopener noreferrer">
                        <div className='li-icon'></div>
                    </a>
                </div>
                <div className="about-info">
                    <h3>Casey Warren</h3>
                    <div className='casey-image about-image'></div>
                    <p className="about-paragraph">Casey ........</p>
                </div>
                <div className="about-link">
                    <a href="https://www.linkedin.com/in/casey-maynah-warren/" target="_blank" rel="noopener noreferrer">
                        <div className='li-icon'></div>
                    </a>
                </div>
                <div className="about-info">
                    <h3>Moises Depena</h3>
                    <div className='moises-image about-image'></div>
                    <p className="about-paragraph">Moises ........</p>
                </div>
                <div className="about-link">
                    <a href="http://www.linkedin.com/in/swemoisesdepena/" target="_blank" rel="noopener noreferrer">
                        <div className='li-icon'></div>
                    </a>
                </div>
                <div className="about-info">
                    <h3>Parker Sequeira</h3>
                    <div className='parker-image about-image'></div>
                    <p className="about-paragraph">Parker ........</p>
                </div>
                <div className="about-link">
                    <a href="https://www.linkedin.com/in/parker-sequeira/" target="_blank" rel="noopener noreferrer">
                        <div className='li-icon'></div>
                    </a>
                </div>
                <div>
                </div>
            </>
        )
    }
}

