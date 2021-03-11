import React, { Component } from 'react';
import {
    getAllUserFavorites,
    deleteUserFavorite,
} from './UTILS/ApiUtils.js';
import './SearchPage.css';


export default class FavoritesPage extends Component {
    state = {
        favorites: '',
        load: false,
    }

    componentDidMount = async () => {
        const favorites = await getAllUserFavorites(this.props.token);

        this.setState({
            favorites: favorites,
            load: true,
        })
        console.log(this.state.favorites)

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
            <div >
                <span className="favorites-title">Favorites</span>
                {this.state.load &&
                    <div className="list">
                        {this.state.favorites.map(favorite =>
                            <div key={favorite.id} className="strain">
                                <p className="name">{favorite.name}</p>
                                <p><span className="name-header">Type:</span> {favorite.race}</p>
                                <p className="flavors"><span className="name-header">Flavors:</span> {favorite.flavors[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>

                                <h3>Effects</h3>
                                <p className="recreation"><span className="name-header">Positive:</span> {favorite.positive[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                                <p className="medical"><span className="name-header">Medical:</span> {favorite.medical[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                                <p className="negative"><span className="name-header">Negative:</span> {favorite.negative[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                                <p className="description">{favorite.description}</p>
                                <hr />
                                <p><span className="name-header">Share Favorite:</span></p>
                                <p>https://competent-jones-a33e98.netlify.app/share/{favorite.id}</p>
                                <button onClick={() => this.handleDeleteFavorite(favorite.id)}>
                                    Delete Favorite</button>
                            </div>
                        )}
                    </div>}
            </div>
        );
    }
}
