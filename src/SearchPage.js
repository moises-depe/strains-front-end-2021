import React, { Component } from 'react'
import { getAllStrains, getAllUserFavorites } from './UTILS/ApiUtils.js';
import './SearchPage.css';



export default class SearchPage extends Component {
    state = {

        strains: {},
        favorites: [],
        load: false,
    }

    componentDidMount = async () => {
        const data = await getAllStrains();

        this.setState({
            strains: Object.entries(data).slice(0, 5),
            load: true,
        })

        console.log(this.state.strains)
    }

    fetchFavorites = async () => {
        const favorites = await getAllUserFavorites();
        this.setState({ favorites });
    }

    render() {
        const strains = this.state.strains;
        console.log();
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="searchbar">
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search for strains</button>
                </form>
                <div className="list">
                    {this.state.load &&
                        strains.map((strain, i) =>
                            <div key={i} className="strain">
                                <p className="name"><span className="name-header">Name:</span> {strain[0]}</p>
                                <p><span className="name-header">Type:</span> {strain[1].race}</p>
                                <p className="flavors"><span className="name-header">Flavors:</span> {strain[1].flavors.map(flavor => <li>{flavor}</li>)}</p>
                                <p className="medical"><span className="name-header">Medical Benefit:</span> {strain[1].effects.medical.map(medical => <li>{medical}</li>)}</p>
                                <p className="recreation"><span className="name-header">Recreational Effect:</span> {strain[1].effects.positive.map(positive => <li>{positive}</li>)}</p>

                            </div>
                        )}
                </div>
            </div>
        )
    }
}