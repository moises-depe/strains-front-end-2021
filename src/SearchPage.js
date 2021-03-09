import React, { Component } from 'react'
import { getAllStrains } from './UTILS/ApiUtils.js';



export default class SearchPage extends Component {
    state = {
        test: 'initial state before api call',
    }

    componentDidMount = async () => {
        const data = await getAllStrains();

        this.setState({
            test: data.body,
        })

        console.log('this shows the call made on mount')
    }
    render() {
        console.log(this.state.test);
        return (
            <div>
                {this.state.test}
            </div>
        )
    }
}
