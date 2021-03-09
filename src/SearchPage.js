import React, { Component } from 'react'
import { getAllStrains } from './UTILS/ApiUtils.js';



export default class SearchPage extends Component {
    state = {
        strains: {},
        load: false,
    }

    componentDidMount = async () => {
        const data = await getAllStrains();

        this.setState({
            strains: Object.entries(data).slice(0, 5),
            load: true,
        })

        console.log(this.state.strains)
    }



    render() {
        const strains = this.state.strains;
        console.log();
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input value={this.state.search} onChange={this.handleSearchChange} />
                <button>Search for strains</button>
            </form>
                {this.state.load &&
                    strains.map((strain, i) => 
                    <div key={i} className='strain'>
                        <p>Name: {strain[0]}</p>
                        <p>Type: {strain[1].race}</p>
                        <p>Flavors: {strain[1].flavors.map(flavor => <li>{flavor}</li>)}</p>
                        <p>Medical: {strain[1].effects.medical.map(medical => <li>{medical}</li>)}</p>
                        <p>Positive: {strain[1].effects.positive.map(positive => <li>{positive}</li>)}</p>
                        
                    </div>
                    )}
            </div >
            
        )
    }
}