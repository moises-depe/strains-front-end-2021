import React, { Component } from 'react';
import { shareUserFavorite } from './UTILS/ApiUtils.js';

export default class SharedPage extends Component {
    state = {
        favorite: '',
        loaded: false,
    }

    componentDidMount = async () => {
        await this.fetchSharedFavorite();
    }

    fetchSharedFavorite = async () => {
        const response = await shareUserFavorite(this.props.match.params.id);

        this.setState({
            favorite: response,
            loaded: true,
        })

        console.log(this.state.favorite);
    }

    render() {
        return (
            <div>
                yo
            </div>
        )
    }
}
