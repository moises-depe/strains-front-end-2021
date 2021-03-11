import React, { Component } from 'react'
import './SearchPage.css';


export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <img alt="loading" width="100" src="https://media.giphy.com/media/paLTRWydS53cHGXKp1/giphy.gif" />
            </div>
        )
    }
}