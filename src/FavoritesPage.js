import React, { Component } from 'react';
import {
    getAllUserFavorites,
    deleteUserFavorite,
    addUserFavorite
} from '../UTILS/ApiUtils.js';

export default class FavoritesPage extends Component {
    state = {
        favorites =[],
        load: false,
    }

    componentDidMount = async () => {
        await this.fetchFavorites();
    }

    // Fetch Functions
    fetchFavorites = async () => {
        const response = await getAllUserFavorites(this.props.token);

        this.setState({
            favorites: response,
            load: true,
        })
    }

    // Event Handlers
    handleDeleteFavorite = async (id, token) => {
        const deleted = await deleteUserFavorite(id, token);

        await this.fetchFavorites(token);
    }

    // Loading component with gif from past lab
    //
    //component did update linked to prev.state/this.state of favorites

    render() {
        return (
            <div>
                {this.state.load &&
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
                                <button onClick={() =>
                                    this.handleDeleteFavorite(favorite.id, this.props.token)}>
                                    Deleter Favorite</button>
                            </div>
                        )}
                    </div>}
            </div>
        );
    }
}