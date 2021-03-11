import React, { Component } from 'react'
import './HomePage.css';


export default class HomePage extends Component {
    render() {
        return (
            <div >
                <div>
                    <img className="thcHome" src="./medical2.png" alt="medical symbol"></img>
                </div>
                <div className="home-description">
                    Strains Selector lets you search over 2000 different strains of cannabis.
                        <br></br>
                        Our search parameters make it easy to view the medical benefits, recreational effects, and flavors of each strain.
                        <br></br>
                        Strains Selector also allows you to save your favorite strains under your personal login.
                        <br></br>
                        A link will also be generated for each of your favorites that allows you to share the strain and all of its details.
                        <br/><br/>
                        Cannabis plants come in two main classifications. Cannabis sativa and Cannabis indica. The first thing a new user will pick up is which of the two they prefer.
                        <br/><br/>
                        Indica plants produce marijuana strains that give you a deep body high, often making you sleepy or “couch-locked”. Indica strains are used to treat chronic pain, anxiety, and insomnia.
                        <br/><br/>
                        Sativa plants produce marijuana strains that give you a creative and uplifting “mind high”.  Sativa strains are used to treat depression and are great at providing energy and focus.
                        <br/><br/>
                        Hybrids of the two plants create strains that combine benefits of both classifications and are directly influenced by the individual genetics of the plant. The resulting amount of choice is incredible. Hybrid strains   fall into the following categories:
                        <br/><br/>
                        Indica Dominant- Excellent for treating daytime pain.
                        <br/>
                        Hybrids- Strains that have an equal between a cerebral and body relaxing high.
                        <br/>
                        Sativa Dominant- Energetic strains that boost focus and creativity without putting you to sleep.
                        <br/><br/>
                </div>
                <br/><br/><br/><br/>
                <img className='classification' src='./weed.png' alt=''></img>
            </div>
        )
    }
}
