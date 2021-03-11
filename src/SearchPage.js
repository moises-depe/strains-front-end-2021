import React, { Component } from 'react';
import { getAllStrains, getAllUserFavorites, addUserFavorite, getStrainByName, getStrainDescriptionById } from './UTILS/ApiUtils.js';
import './SearchPage.css';



export default class SearchPage extends Component {
    state = {

        strains: {},
        favorites: [],
        description: '',
        img: 'http://www.placekitten.com/300/300',
        race: '',
        flavor: '',
        load: false,
        // currentPage: 1,
        // perPage: 50,
        // totalStrains: 0,
    }



    componentDidMount = async () => {
        const data = await getAllStrains();
        await this.fetchFavorites();

        this.setState({
            strains: Object.entries(data).slice(0, 5),
            load: true,
        })

        console.log(this.state.strains)
    }

    fetchFavorites = async () => {
        const favorites = await getAllUserFavorites(this.props.token);
        this.setState({ favorites });
    }
    // needs work on, dont know how to get ID to match description with object
    handleDescription = async () => {
        const desc = await getStrainDescriptionById();
        this.setState({ description: desc })
    }

    handleSearchChange = e => this.setState({ search: e.target.value })

    // needs fixing, dont know the problem 
    /*findById = async (array, id) => {
        for (let item of array) {
            if (item[1].id === id) return item;
        }
    }
*/
    // look at this cause im not for sure what to do.
    handlefilterRace = async (racetype) => {
        const filteredRace = await this.state.strains.filter(weed => weed[1].race === racetype);
        this.setState({ strains: filteredRace })
    }
    doSearch = async () => {
        const aStrain = await getStrainByName(this.state.search)
        console.log(aStrain);
        //fix this part to get it to work, returns undefined
        const result = await this.findById(this.state.strains, aStrain.id)
        console.log(result);
        this.setState({ strains: result })
    }

    handleRaceChange = async (e) => this.setState({ race: e.target.value });

    handleFlavorChange = async (e) => this.setState({ flavor: e.target.value });

    handleSubmit = async e => {
        e.preventDefault();

        await this.handlefilterRace(this.state.race);
    }

    // talk to group about desc and img, mainly img
    // work on backend to be able to post(name null??)
    handleFavoriteClick = async (rawStrain, rawDesc, rawImg) => {
        const favoriteStrain = {
            name: rawStrain[0],
            race: rawStrain[1].race,
            img: rawImg.img,
            flavors: rawStrain[1].flavors,
            positive: rawStrain[1].positive,
            negative: rawStrain[1].negative,
            medical: rawStrain[1].medical,
            description: rawDesc.desc,
        }
        await addUserFavorite(favoriteStrain, this.props.token);

        await this.fetchFavorites();
    }

    isAFavorite = (strains) => {
        const isIsFavorites = this.state.favorites.find(favorite => favorite.name === strains[0]);

        return Boolean(isIsFavorites);
    }

    render() {

        const strains = this.state.strains;
        console.log(strains);
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="searchbar">
                    <select onChange={this.handleRaceChange}>
                        <option value='indica'>Indica</option>
                        <option value='hybrid'>Hybrid</option>
                        <option value='sativa'>Sativa</option>
                    </select>
                    <select onChange={this.handleFlavorChange}>
                        <option value='Earthy'>Earthy</option>
                        <option value='Chemical'>Chemical</option>
                        <option value='Pine'>Pine</option>
                        <option value='Spicy/Herbal'>Spicy/Herbal</option>
                        <option value='Pungent'>Pungent</option>
                        <option value='Pepper'>Pepper</option>
                        <option value='Flowery'>Flowery</option>
                        <option value='Citrus'>Citrus</option>
                        <option value='Orange'>Orange</option>
                        <option value='Sweet'>Sweet</option>
                        <option value='Skunk'>Skunk</option>
                        <option value='Grape'>Grape</option>
                        <option value='Minty'>Minty</option>
                        <option value='Woody'>Woody</option>
                        <option value='Cheese'>Cheese</option>
                        <option value='Diesel'>Diesel</option>
                        <option value='Tropical'>Tropical</option>
                        <option value='Grapefriut'>Grapefriut</option>
                        <option value='Nutty'>Nutty</option>
                        <option value='Lemon'>Lemon</option>
                        <option value='Berry'>Berry</option>
                        <option value='Blueberry'>Blueberry</option>
                        <option value='Ammonia'>Ammonia</option>
                        <option value='Apple'>Apple</option>
                        <option value='Rose'>Rose</option>
                        <option value='Butter'>Butter</option>
                        <option value='Honey'>Honey</option>
                        <option value='Tea'>Tea</option>
                        <option value='Lime'>Lime</option>
                        <option value='Lavender'>Lavender</option>
                        <option value='Strawberry'>Strawberry</option>
                        <option value='Mint'>Mint</option>
                        <option value='Chestnut'>Chestnut</option>
                        <option value='Tree Fruit'>Tree Fruit</option>
                        <option value='Pear'>Pear</option>
                        <option value='Apricot'>Apricot</option>
                        <option value='Peach'>Peach</option>
                        <option value='Blue Cheese'>Blue Cheese</option>
                        <option value='Menthol'>Menthol</option>
                        <option value='Coffee'>Coffee</option>
                        <option value='Tar'>Tar</option>
                        <option value='Mango'>Mango</option>
                        <option value='Pineapple'>Pineapple</option>
                        <option value='Sage'>Sage</option>
                        <option value='Vanilla'>Vanilla</option>
                        <option value='Plum'>Plum</option>
                        <option value='Tobacco'>Tobacco</option>
                        <option value='Violet'>Violet</option>
                    </select>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search for strains</button>
                </form>
                <div className="list">
                    {this.state.load &&
                        strains.map((strain, i) =>
                            <div key={i} className="strain">
                                <p className="name"><span className="name-header">Name:</span> {strain[0]}</p>
                                <p><span className="name-header">Type:</span> {strain[1].race}</p>
                                <p className="flavors"><span className="name-header">Flavors:</span> {strain[1].flavors.map(flavor => <li>{flavor}</li>)}</p>
                                <p className="medical"><span className="name-header">Medical Benefit:</span> {strain[1].effects.medical.map(medical => <li>{medical}</li>)}</p>
                                <p className="recreation"><span className="name-header">Recreational Effect:</span> {strain[1].effects.positive.map(positive => <li>{positive}</li>)}</p>
                                <h3>Page {this.state.currentPage}</h3>
                                <button onClick={this.handlePreviousClick} disabled={this.state.currentPage === 1}>Previous</button>
                                <button disabled={this.state.currentPage === lastPage} onClick={this.handleNextClick}>Next</button>
                            </div>
                        )}
                </div>
            </div>
        )
    }

}
}