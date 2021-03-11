import React, { Component } from 'react';
import { getAllStrains, getAllUserFavorites, addUserFavorite, getStrainDescriptionById } from './UTILS/ApiUtils.js';
import './SearchPage.css';

import Spinner from './Spinner.js';



export default class SearchPage extends Component {
    state = {

        strains: [],
        filterstrain: {},
        favorites: [],
        description: '',
        img: 'http://www.placekitten.com/300/300',
        race: '',
        flavor: '',
        pos: '',
        neg: '',
        med: '',
        load: true,
    }

    componentDidMount = async () => {

        const data = await getAllStrains();
        await this.fetchFavorites();

        this.setState({
            strains: Object.entries(data),
            filterstrain: Object.entries(data),
            load: false,
        })
    }

    fetchFavorites = async () => {
        const data = await getAllUserFavorites(this.props.token);
        this.setState({ favorites: data });
    }
    // needs work on, dont know how to get ID to match description with object
    handleDescription = async () => {
        const desc = await getStrainDescriptionById();
        this.setState({ description: desc })
    }


    handleRaceChange = async (e) => this.setState({ race: e.target.value });

    handleFlavorChange = async (e) => this.setState({ flavor: e.target.value });
    handlePosChange = async (e) => this.setState({ pos: e.target.value });

    handleNegChange = async (e) => this.setState({ neg: e.target.value });

    handleMedChange = async (e) => this.setState({ med: e.target.value });

    handleSearchChange = e => this.setState({ search: e.target.value })

    handlefilter = async (name, race, flavor, med, pos) => {
        const filtered = await this.state.strains.filter(weed => weed[0].includes(name) && weed[1].race === race && weed[1].flavors.includes(flavor) && weed[1].effects.medical.includes(med) && weed[1].effects.positive.includes(pos));
        this.setState({ filterstrain: filtered })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await this.handlefilter(this.state.search, this.state.race, this.state.flavor, this.state.med, this.state.pos)

    }

    // talk to group about desc and img, mainly img
    // work on backend to be able to post(name null??)
    handleFavoriteClick = async (rawStrain, rawDesc, rawImg) => {
        const favoriteStrain = {
            name: rawStrain[0],
            race: rawStrain[1].race,
            img: 'http://www.placekitten.com/300/300',
            flavors: rawStrain[1].flavors,
            positive: rawStrain[1].effects.positive,
            negative: rawStrain[1].effects.negative,
            medical: rawStrain[1].effects.medical,
            description: 'hello there',
        }
        await addUserFavorite(favoriteStrain, this.props.token);

        await this.fetchFavorites();
    }

    isAFavorite = (strain) => {
        const isIsFavorites = this.state.favorites.find(favorite => favorite.name === strain[0]);

        return Boolean(isIsFavorites);
    }


    render() {
        const strains = this.state.filterstrain;
        console.log(this.state.favorites);
        return (
            <div className="search-main">
                <form onSubmit={this.handleSubmit} className="searchbar">
                    <select onChange={this.handleRaceChange}>
                        <option>Select A Type</option>
                        <option value='hybrid'>Hybrid</option>
                        <option value='indica'>Indica</option>
                        <option value='sativa'>Sativa</option>
                    </select>
                    <select onChange={this.handleFlavorChange}>
                        <option>FlavorTown options</option>
                        <option value='Ammonia'>Ammonia</option>
                        <option value='Apple'>Apple</option>
                        <option value='Apricot'>Apricot</option>
                        <option value='Berry'>Berry</option>
                        <option value='Blue Cheese'>Blue Cheese</option>
                        <option value='Blueberry'>Blueberry</option>
                        <option value='Butter'>Butter</option>
                        <option value='Cheese'>Cheese</option>
                        <option value='Chemical'>Chemical</option>
                        <option value='Chestnut'>Chestnut</option>
                        <option value='Citrus'>Citrus</option>
                        <option value='Coffee'>Coffee</option>
                        <option value='Diesel'>Diesel</option>
                        <option value='Earthy'>Earthy</option>
                        <option value='Flowery'>Flowery</option>
                        <option value='Grape'>Grape</option>
                        <option value='Grapefriut'>Grapefriut</option>
                        <option value='Honey'>Honey</option>
                        <option value='Lavender'>Lavender</option>
                        <option value='Lemon'>Lemon</option>
                        <option value='Lime'>Lime</option>
                        <option value='Mango'>Mango</option>
                        <option value='Menthol'>Menthol</option>
                        <option value='Mint'>Mint</option>
                        <option value='Minty'>Minty</option>
                        <option value='Nutty'>Nutty</option>
                        <option value='Orange'>Orange</option>
                        <option value='Peach'>Peach</option>
                        <option value='Pear'>Pear</option>
                        <option value='Pepper'>Pepper</option>
                        <option value='Pine'>Pine</option>
                        <option value='Pineapple'>Pineapple</option>
                        <option value='Plum'>Plum</option>
                        <option value='Pungent'>Pungent</option>
                        <option value='Rose'>Rose</option>
                        <option value='Sage'>Sage</option>
                        <option value='Skunk'>Skunk</option>
                        <option value='Spicy/Herbal'>Spicy/Herbal</option>
                        <option value='Strawberry'>Strawberry</option>
                        <option value='Sweet'>Sweet</option>
                        <option value='Tar'>Tar</option>
                        <option value='Tea'>Tea</option>
                        <option value='Tree Fruit'>Tree Fruit</option>
                        <option value='Tropical'>Tropical</option>
                        <option value='Tobacco'>Tobacco</option>
                        <option value='Woody'>Woody</option>
                        <option value='Vanilla'>Vanilla</option>
                        <option value='Violet'>Violet</option>
                    </select>
                    <select onChange={this.handlePosChange}>
                        <option>Select A Positive</option>
                        <option value='Aroused'>Aroused</option>
                        <option value='Creative'>Creative</option>
                        <option value='Energetic'>Energetic</option>
                        <option value='Euphoric'>Euphoric</option>
                        <option value='Focused'>Focused</option>
                        <option value='Giggly'>Giggly</option>
                        <option value='Happy'>Happy</option>
                        <option value='Hungry'>Hungry</option>
                        <option value='Relaxed'>Relaxed</option>
                        <option value='Sleepy'>Sleepy</option>
                        <option value='Tingly'>Tingly</option>
                        <option value='Uplifted'>Uplifted</option>
                    </select>
                    <select onChange={this.handleMedChange}>
                        <option>Select Medical</option>
                        <option value='Cramps'>Cramps</option>
                        <option value='Depression'>Depression</option>
                        <option value='Eye Pressure'>Eye Pressure</option>
                        <option value='Fatigue'>Fatigue</option>
                        <option value='Headache'>Headache</option>
                        <option value='Headaches'>Headaches</option>
                        <option value='Inflammation'>Inflammation</option>
                        <option value='Insomnia'>Insomnia</option>
                        <option value='Lack Of Appetite'>Lack Of Appetite</option>
                        <option value='Muscle Spasms'>Muscle Spasms</option>
                        <option value='Nausea'>Nausea</option>
                        <option value='Pain'>Pain</option>
                        <option value='Spasticity'>Spasticity</option>
                        <option value='Stress'>Stress</option>
                    </select>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search for strains</button>
                </form>
                <div className="list">
                    {this.state.load
                        ? <Spinner />
                        : strains.map((strain) =>
                            <div key={strain[1].id} className="strain">
                                <p className="name"> {strain[0]}</p>
                                <p><span className="name-header">Type:</span> {strain[1].race}</p>
                                <p className="flavors"><span className="name-header">Flavors:</span> {strain[1].flavors.map(flavor => <li>{flavor}</li>)}</p>
                                <p className="medical"><span className="name-header">Medical Benefit:</span> {strain[1].effects.medical.map(medical => <li>{medical}</li>)}</p>
                                <p className="recreation"><span className="name-header">Recreational Effect:</span> {strain[1].effects.positive.map(positive => <li>{positive}</li>)}</p>
                                <p>{
                                    this.isAFavorite(strain)
                                        ? '🔥🔥🔥'
                                        : <button onClick={() => this.handleFavoriteClick(strain, this.state.description, this.state.img)}>Add to favorite</button>
                                }
                                </p>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}