import React, { Component } from 'react'
import { getAllStrains } from './UTILS/ApiUtils.js';



export default class SearchPage extends Component {
    state = {
        test: 'initial state before api call',
        load: false,
    }

    componentDidMount = async () => {
        const data = await getAllStrains();

        this.setState({
            test: Object.entries(data).slice(0, 5),
            load: true,
        })

        console.log(this.state.test)
    }



    render() {
        console.log();
        return (
            <div>
                {this.state.load &&
                    this.state.test.map(fave =>
                        <p>{fave[0]}</p>
                    )}
            </div >
        )
    }
}
