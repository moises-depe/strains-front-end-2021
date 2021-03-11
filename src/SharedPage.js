import React, { Component } from 'react';
import { shareUserFavorite } from './UTILS/ApiUtils.js';

import './SharedPage.css';


import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton,
} from 'react-share';
import {
    EmailIcon,
    FacebookIcon,
    RedditIcon,
    TwitterIcon,
} from 'react-share';

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

    handleCopyClick = (favorite) => {
        const sharedLink = document.querySelector(`a.${favorite.race}${favorite.id}`).innerText;
        navigator.clipboard.writeText(sharedLink);
        alert(`Link copied to clipboard. Sharing is caring!`);
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
                        <p className="medical2"><span className="name-header">Medical:</span> {this.state.favorite.medical[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                        <p className="negative"><span className="name-header">Negative:</span> {this.state.favorite.negative[0].split('","').join(', ').replace(/{|}|"/g, '')}</p>
                        <p className="description">{this.state.favorite.description}</p>
                        <hr />
                        <div className="copy-div">
                            <p>Link to Share Favorite:</p>
                            <a className={`${this.state.favorite.race}${this.state.favorite.id}`} href={`https://competent-jones-a33e98.netlify.app/share/${this.state.favorite.id}`}>{`https://competent-jones-a33e98.netlify.app/share/${this.state.favorite.id}`}</a>
                            <button onClick={() => {
                                this.handleCopyClick(this.state.favorite)
                            }
                            }>Copy to Clipboard</button>
                        </div>
                        <div>
                            <EmailShareButton url={`https://competent-jones-a33e98.netlify.app/share/${this.state.favorite.id}`}><EmailIcon size={32} round={true} /></EmailShareButton>
                            <FacebookShareButton url={`https://competent-jones-a33e98.netlify.app/share/${this.state.favorite.id}`}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                            <RedditShareButton url={`https://competent-jones-a33e98.netlify.app/share/${this.state.favorite.id}`}><RedditIcon size={32} round={true} /></RedditShareButton>
                            <TwitterShareButton url={`https://competent-jones-a33e98.netlify.app/share/${this.state.favorite.id}`}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                        </div>
                    </div>}
            </div>
        )
    }
}
