import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';


export default class Header extends React.Component {
    render() {
        return (
            <header>
                <span className="header-title">Strains Selector</span>
                <br></br>
                <Link to="/" className="links">
                    Home
                </Link>
                {!this.props.token && <>
                    <NavLink exact activeClassName="current-page" to="/signin" className="links">
                        Sign In
                </NavLink>
                    <NavLink exact activeClassName="current-page" to="/signup" className="links">
                        Sign Up
                </NavLink>
                </>}
                {this.props.token && <>
                    <NavLink exact activeClassName="current-page" to="/favorites" className="links">
                        Favorites
                </NavLink>
                    <NavLink exact activeClassName="current-page" to="/search" className="links">
                        Search
                </NavLink>
                    <button onClick={this.props.handleLogout}>
                        Log Out
                </button>
                </>}
                <Link to="/about" className="links">
                    About Us
                </Link>
            </header>
        );
    }
}