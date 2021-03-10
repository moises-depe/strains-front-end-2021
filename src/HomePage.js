import React, { Component } from 'react'
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="home-main">
                    <img className="thcHome" src="./medical2.png" alt="medical symbol"></img>
                </div>
                <div className="home-description">
                    Strains Selector lets you search over 2000 different strains of cannabis.
                    <br></br>
                    Our search parameters make it easy to view the medical benefits, recreational effects and flavors of each strain.
                </div>
            </div>
        )
    }
}