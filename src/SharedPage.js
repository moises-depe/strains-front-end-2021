import React, { Component } from 'react';
import { shareUserFavorite } from './UTILS/ApiUtils.js';

export default class SharedPage extends Component {
    state = {
        favorite: '',
        load: false,
    }

    componentDidMount = async () => {
        await this.fetchSharedFavorite();
    }

    fetchSharedFavorite = async () => {
        const response = await shareUserFavorite(this.props.match.params.id);

        this.setState({
            favorite: response[0],
            load: true,
        })
    }
    render() {
        return (
            <div>
                {this.state.load &&
                    <div key={this.state.favorite.id} className="this.state.favorite-div">
                        <h2>{this.state.favorite.name}</h2>
                        <p>{this.state.favorite.race}</p>
                        <p>Flavors: {this.state.favorite.flavors.join(', ')}</p>
                        <img src={this.state.favorite.img} alt="strain" />
                        <h3>Effects</h3>
                        <p>Positive: {this.state.favorite.positive.join(', ')}</p>
                        <p>Medical: {this.state.favorite.medical.join(', ')}</p>
                        <p>Negative: {this.state.favorite.negative.join(', ')}</p>
                        <p>{this.state.favorite.description}</p>
                        <hr />
                        <p>Share Favorite:</p>
                        <p>https://competent-jones-a33e98.netlify.app/share/{this.state.favorite.id}</p>
                    </div>}
            </div>
        )
    }
}
