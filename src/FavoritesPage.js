import React, { Component } from 'react';
import {
    getAllUserFavorites,
    deleteUserFavorite,
} from './UTILS/ApiUtils.js';

export default class FavoritesPage extends Component {
    state = {
        favorites: []
    }

    componentDidMount = async () => {
        const favorites = await getAllUserFavorites(this.props.token);

        this.setState({ favorites })
    }

    // Event Handlers
    handleDeleteFavorite = async (id) => {
        await deleteUserFavorite(id, this.props.token);

        const favorites = await getAllUserFavorites(this.props.token);

        this.setState({ favorites })
    }

    // Loading component with gif from past lab
    //
    //component did update linked to prev.state/this.state of favorites

    render() {
        console.log(this.state.favorites);
        return (
            <div>
                    <div className="favorites-wrapper">
                        {this.state.favorites.map(favorite =>
                            <div key={favorite.id} className="favorite-div">
                                <h2>{favorite.name}</h2>
                                <p>{favorite.race}</p>
                                <p>Flavors: {favorite.flavors.join(', ')}</p>
                                <img src={favorite.img} alt="strain" />
                                <h3>Effects</h3>
                                <p>Positive: {favorite.positive.join(', ')}</p>
                                <p>Medical: {favorite.medical.join(', ')}</p>
                                <p>Negative: {favorite.negative.join(', ')}</p>
                                <p>{favorite.description}</p>
                                <hr />
                                <p>Share Favorite:</p>
                                <p>https://competent-jones-a33e98.netlify.app/share/{favorite.id}</p>
                                <button onClick={() => this.handleDeleteFavorite(favorite.id)}>
                                    Delete Favorite</button>
                            </div>
                        )}
                    </div>
            </div>
        );
    }
}