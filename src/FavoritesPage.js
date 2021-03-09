import React, { Component } from 'react';
import {
    getAllUserFavorites,
    deleteUserFavorite,
    addUserFavorite
} from '../UTILS/ApiUtils.js';

export default class FavoritesPage extends Component {
    state = {
        favorites =[],
    }

    componentDidMount = async () => {
        await this.fetchFavorites();
    }

    // Fetch Functions
    fetchFavorites = async () => {
        const response = await getAllUserFavorites(this.props.token);

        this.setState({
            favorites: response,
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

    checkFavoriteStatus = (catFact, favorites) => {
        for (let favorite of favorites) {
            if (favorite.fact_api_id === catFact._id) {
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
                <div className="favorites-wrapper">
                    {this.state.favorites.map(favorite =>
                        <div key={favorite.id} className="favorite-div">
                            <h2>{favorite.name}</h2>
                            <p>{favorite.race}</p>
                            <img src={favorite.img} alt="strain" />
                            <h3>Effects</h3>
                            <p>Positive: {...favorite.positive}</p>
                            <p>Negative: {...favorite.negative}</p>
                            <p>Medical: {...favorite.medical}</p>
                            <p>Flavors: {...favorite.flavors}</p>
                            <p>{favorite.description}</p>
                            <button onClick={() =>
                                this.handleDeleteFavorite(favorite.id, this.props.token)}>
                                Deleter Favorite</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}