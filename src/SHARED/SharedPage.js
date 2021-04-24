import React, { Component } from 'react';
import { shareUserFavorite } from '../UTILS/ApiUtils.js';

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

    parse = (arr) => arr[0].split('","').join(', ').replace(/{|}|"/g, '')

    render() {
        const URL =`https://strains-selector.netlify.app/share/${this.state.favorite.id}`
        const iconProps = { size: 32, round: true };
        const { favorite } = this.state;
        return (
            <div className="share-page-centering">
                {this.state.load &&
                    <div key={this.state.favorite.id} className="share-page">
                        <p className="name">{favorite.name}</p>
                        <p>
                            <span className="name-header">Type:</span>
                            {favorite.race}
                        </p>
                        <p className="flavors">
                            <span className="name-header">Flavors:</span> 
                            {this.parse(favorite.flavors)}
                        </p>
                        <h3>Effects</h3>
                        <p className="recreation">
                            <span className="name-header">Positive:</span> 
                            {this.parse(favorite.positive)}
                        </p>
                        <p className="medical2">
                            <span className="name-header">Medical:</span> 
                            {this.parse(favorite.medical)}
                        </p>
                        <p className="negative">
                            <span className="name-header">Negative:</span> 
                            {this.parse(favorite.negative)}
                        </p>
                        <p className="description">{this.parse(favorite.description)}</p>
                        <hr />
                        <div className="copy-div">
                            <p>Link to Share Favorite:</p>
                            <a className={`${this.state.favorite.race}${this.state.favorite.id}`} href={`https://strains-selector.netlify.app/share/${this.state.favorite.id}`}>{`https://strains-selector.netlify.app/share/${this.state.favorite.id}`}</a>
                            <button onClick={() => {
                                this.handleCopyClick(this.state.favorite)
                            }
                            }>Copy to Clipboard</button>
                        </div>
                        <div>
                            <EmailShareButton url={URL}>
                                <EmailIcon {...iconProps} />
                            </EmailShareButton>
                            <FacebookShareButton url={URL}>
                                <FacebookIcon {...iconProps} />
                                </FacebookShareButton>
                            <RedditShareButton url={URL}>
                                <RedditIcon {...iconProps} />
                            </RedditShareButton>
                            <TwitterShareButton url={URL}>
                                <TwitterIcon {...iconProps} />
                            </TwitterShareButton>
                        </div>
                    </div>}
            </div>
        )
    }
}
