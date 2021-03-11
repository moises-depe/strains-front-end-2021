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
            <div className="share-page-centering">
                {this.state.load &&
                    <div key={this.state.favorite.id} className="share-page">
                        <p className="name">{this.state.favorite.name}</p>
                        <p><span className="name-header">Type:</span>{this.state.favorite.race}</p>
                        <p className="flavors"><span className="name-header">Flavors:</span> {this.state.favorite.flavors[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                        <h3>Effects</h3>
                        <p className="recreation"><span className="name-header">Positive:</span> {this.state.favorite.positive[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                        <p className="medical"><span className="name-header">Medical:</span> {this.state.favorite.medical[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                        <p className="negative"><span className="name-header">Negative:</span> {this.state.favorite.negative[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                        <p className="description">{this.state.favorite.description}</p>
                        <hr />
                        <p>Share Favorite:</p>
                        <p>https://competent-jones-a33e98.netlify.app/share/{this.state.favorite.id}</p>
                    </div>}
            </div>
        )
    }
}
